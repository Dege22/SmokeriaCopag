import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Importação para geração de UUID
import styles from './ProductSellerPage.module.css';
import { Counter } from '../functions/Counter'; // Importar o componente Counter
import { useWindowSize } from '../hooks/useWindowSize'; // Importar o hook useWindowSize
import { dbProducts } from '../db/DbProducts';
import { dbCheckout } from '../db/DbCheckout';
import { Timer, Percent } from 'phosphor-react';
import { Product } from '../components/Product';
import { SubFooter } from '../components/SubFooter';
import { Footer } from '../components/Footer';
import axios from 'axios';

await axios.get('https://api-pix-smokeria021.onrender.com/contar-acesso/productSellerPage')

export const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export function ProductSellerPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const size = useWindowSize();

    // Encontrar o produto pelo id
    const data = dbProducts.find(product => product.id === id);

    if (!data) {
        return <div>Produto não encontrado</div>;
    }

    const [timeLeft, setTimeLeft] = useState(6 * 60 * 60); // 6 horas em segundos

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleAddToCart = () => {
        const newCheckoutItem = {
            id: uuidv4(),
            productId: id,
            personDate: {}
        };
        dbCheckout.push(newCheckoutItem);
        navigate(`/checkout/${newCheckoutItem.id}`);
    };

    return (
        <div>
            <div className={styles.containerMain}>
                <div className={styles.containerProduct}>
                    {size.width <= 768 ? (
                        <>
                            <div className={styles.title}>
                                <strong>{data.title}</strong>
                                <spam>Código: E6UPTDHP7</spam>
                                <div>
                                    <a>5 de 5</a>
                                    <p>⭐⭐⭐⭐⭐</p>
                                    <a>({data.assessment})</a>
                                </div>
                            </div>
                            <div className={styles.imgContainer}>
                                <img
                                    className={styles.img}
                                    src={data.img}
                                    alt="Product"
                                />
                            </div>
                        </>
                    ) : (
                        <div className={styles.imgContainer}>
                            <img
                                className={styles.img}
                                src={data.img}
                                alt="Product"
                            />
                        </div>
                    )}
                    <div className={styles.containerProductInfos}>
                        {size.width > 768 && (
                            <div className={styles.title}>
                                <strong>{data.title}</strong>
                                <spam>Código: E6UPTDHP7</spam>
                                <div>
                                    <a>5 de 5</a>
                                    <p>⭐⭐⭐⭐⭐</p>
                                    <a>({data.assessment})</a>
                                </div>
                            </div>
                        )}
                        <div>
                            <div className={styles.promotionTime}>
                                <a>Termina em:<Timer/>{formatTime(timeLeft)}</a>
                                <div className={styles.quantityItems}>
                                    <spam><Percent/> Desconto extra por tempo limitado</spam>
                                    <spam>Últimas unidades</spam>
                                </div>
                            </div>
                            <div className={styles.containerValue}>
                                <div>
                                    <strong className={styles.mainValue}>R$ {data.valueSeller}</strong>
                                    <a>via Pix</a>
                                </div>

                                <div>
                                    <a className={styles.oldValue}>R$ {data.oldValue}</a>
                                    <strong>  R$ {data.valueSeller}</strong>
                                </div>

                                <div>
                                    <a>até</a>
                                    <strong> 3x</strong>
                                    <a> sem juros</a>
                                </div>
                            </div>
                            <div className={styles.buttonPay}>
                                <div>
                                    <Counter /> {/* Utilizar o componente Counter */}
                                </div>
                                <div className={styles.counter} >
                                    <button className={styles.buttonCard} type='submit' onClick={handleAddToCart}>ADICIONAR AO CARRINHO</button>
                                </div>
                            </div>
                        </div>

                        <div className={styles.paymentMethods}>
                            <div>
                                <img src='https://cdn.awsli.com.br/production/static/img/formas-de-pagamento/pagali-pix-logo.png?v=3b20af0'/>
                                <div className={styles.paymentMethodsValue}>
                                    <spam>11% DE DESCONTO</spam>
                                    <a>R$ {data.valueSeller}</a>
                                </div>
                            </div>
                            <div>
                                <img src='https://cdn.awsli.com.br/production/static/img/formas-de-pagamento/boleto-logo.png?v=3b20af0'/>
                                <div className={styles.paymentMethodsValue}>
                                    <spam>11% DE DESCONTO</spam>
                                    <a>R$ {data.valueSeller}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.description}>
                <strong>Descrição</strong>
                <div>
                        {data.description}
                </div>
                </div>

                <div className={styles.feedback}>
                    <img src='/src/assets/feedback.svg'/>
                </div>

                <div className={styles.relatedContainer}>
                    <div className={styles.related}>
                        {dbProducts.slice(0, 4).map(product => {
                            return <Product
                                key={product.id}
                                id={product.id}
                                img={product.img}
                                title={product.title}
                                valueSeller={product.valueSeller}
                                oldValue={product.oldValue}
                                assessment={product.assessment}
                            />
                        })}
                    </div>
                </div>
            </div>
            <SubFooter/>
            <Footer/>
        </div>
    );
}
