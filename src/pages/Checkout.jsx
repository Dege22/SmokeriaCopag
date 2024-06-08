import React, { useEffect, useState } from 'react';
import styles from './Checkout.module.css';
import { CounterCheckout } from '../functions/CounterCheckout';
import { dbCheckout } from '../db/DbCheckout';
import { dbProducts } from '../db/DbProducts';
import { Timer } from 'phosphor-react';
import { formatTime } from './ProductSellerPage';
import { apiPix } from '../functions/ApiPix';
import { useParams } from 'react-router-dom';
import axios from 'axios';

await axios.get('https://api-pix-smokeria021.onrender.com/contar-acesso/checkout')

export function Checkout() {
    
    const { checkoutId } = useParams();

    const checkoutInfo = dbCheckout.find(checkout => checkout.id === checkoutId);
    const { productId, personDate: initialPersonDate } = checkoutInfo || {};
    const productInfo = dbProducts.find(product => product.id === productId);

    const [personDate, setPersonDate] = useState(initialPersonDate || {
        name: '',
        document: '',
        cellNumber: '',
        mail: '',
        cep: '',
        address: '',
        state: '',
        addressNumber: ''
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);
    const [qrCodeUrlImg, setqrCodeUrlImg] = useState('');
    const [pixCode, setPixCode] = useState('');
    const [timeLeft, setTimeLeft] = useState(6 * 60 * 60);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPersonDate(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        const allFieldsFilled = Object.values(personDate).every(field => field.trim() !== '');
        setIsFormValid(allFieldsFilled);
    }, [personDate]);

    const handleSubmit = async () => {
        if (!isFormValid) return; // Verifica se o formulário é válido antes de enviar

        const index = dbCheckout.findIndex(checkout => checkout.id === checkoutId);

        if (index !== -1) {
            dbCheckout[index].personDate = personDate;
            try {
                const { qrCodeUrlImg, pixCode } = await apiPix(productInfo.valueSeller);
                setqrCodeUrlImg(qrCodeUrlImg);
                setPixCode(pixCode);
                setShowPopup(true);
                setFadeIn(true);
            } catch (error) {
                console.error('Error generating QR code:', error);
            }
        } else {
            console.error('Checkout ID not found');
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setFadeIn(false);
    };

    const handleCopyPixCode = () => {
        navigator.clipboard.writeText(pixCode)
            .then(() => alert('Código Pix copiado!'))
            .catch(err => console.error('Erro ao copiar código Pix:', err));
    };

    return (
        <div className={styles.background}>
            <header className={styles.header}>
                <img src="/src/assets/mercado-pago.png" alt="Mercado Pago" />
                <img src="/src/assets/secIcon.svg" alt="Segurança" />
            </header>

            <div className={styles.containerCheckout}>
                <div className={styles.checkout}>
                    <div className={styles.personDate}>
                        <div>
                            Nome completo<spam>*</spam>
                            <input
                                name="name"
                                placeholder='Nome'
                                value={personDate.name}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            CPF/CNPJ<spam>*</spam>
                            <input
                                name="document"
                                placeholder='CPF/CNPJ'
                                value={personDate.document}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            Numero de telefone<spam>*</spam>
                            <input
                                name="cellNumber"
                                placeholder='Numero de telefone'
                                value={personDate.cellNumber}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            Email<spam>*</spam>
                            <input
                                name="mail"
                                placeholder='Email'
                                value={personDate.mail}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className={styles.addressContent}>
                            <div>
                                Cep<spam>*</spam>
                                <input
                                    name="cep"
                                    placeholder='Cep'
                                    value={personDate.cep}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div>
                                Endereco<spam>*</spam>
                                <input
                                    name="address"
                                    placeholder='Endereco'
                                    value={personDate.address}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className={styles.addressContentCep}>
                                <div>
                                    Estado<spam>*</spam>
                                    <input
                                        name="state"
                                        placeholder='Estado'
                                        value={personDate.state}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className={styles.cep}>
                                    Numero<spam>*</spam>
                                    <input
                                        name="addressNumber"
                                        placeholder='Numero'
                                        value={personDate.addressNumber}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <footer>
                            <button 
                                onClick={handleSubmit} 
                                disabled={!isFormValid} 
                                className={!isFormValid ? styles.disabledButton : ''}>
                                Finalizar
                            </button>
                        </footer>
                    </div>

                    <div className={styles.orderFinally}>
                        <div className={styles.productInfo}>
                            <strong></strong>

                            <img src={productInfo.img} alt="Product" />
                            <div>
                                <strong>{productInfo.title}</strong>

                                <div>
                                    <spam>valor:</spam>
                                    <p>R$ {productInfo.valueSeller}</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.valueCheckout}>
                            <div>
                                <div>
                                    <spam>Subtotal</spam>
                                    <p>R$ {productInfo.valueSeller}</p>
                                </div>

                                <div>
                                    <spam>Frete</spam>
                                    <p>R$ 0,00</p>
                                </div>
                                <strong>(2 dias úteis)</strong>
                            </div>

                            <div className={styles.finallyValue}>
                                <spam>Você precisa pagar</spam>
                                <p> R$ {productInfo.valueSeller}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showPopup && (
                <div className={styles.popup}>
                    <div className={`${styles.popupContent} ${fadeIn ? styles.fadeIn : ''}`}>
                        <strong>Pix copia e cola / QR-Code</strong>
                        <a>Termina em:<Timer />{formatTime(timeLeft)}</a>
                        <button className={styles.closeButton} onClick={handleClosePopup}>X</button>
                        <img src={qrCodeUrlImg} alt="QR Code Pix" />
                        <div className={styles.pixCode}>
                            <p>{pixCode}</p>
                            <button className={styles.popupButton} onClick={handleCopyPixCode}>Copiar Código Pix</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
