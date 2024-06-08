import { PhoneCall  } from 'phosphor-react'

import styles from '../styles/SubFooter.module.css'
import imagem from '../assets/subFooter.png'

console.log(imagem)

export function SubFooter() {
    return (
      <div className={styles.subFooter}>
        <div className={styles.subFooterInfos}>
            <div className={styles.infoShop}>
                <img src='/src/assets/perfil-site-600x600.webp'/>
                <span>A Smokeria021 é uma loja que se destaca no mercado como uma tabacaria eletrônica e vape shop, oferecendo uma ampla gama de produtos relacionados ao mundo do vaping e do uso de dispositivos eletrônicos para fumar. Seu foco está em fornecer aos clientes produtos de qualidade, variedade e opções que atendam tanto aos novatos quanto aos aficionados por vaping.</span>
            </div>

            <div className={styles.categorias}>
                <strong>Categorias</strong>
                <a>inicío</a>
                <a>produtos</a>
                <a>contato</a>
            </div>
                
            <div className={styles.institucional}>
                <strong>Institucional</strong>
                <a>Quem somos</a>
                <a>Meios de pagamento</a>
                <a>Envios e Frete</a>
                <a>Politica de privacidade</a>
                <a>Politica de Trocas e Devoluções</a>
            </div>
            
            <div className={styles.contato}>
                <strong>Contato</strong>
                <div>
                    <a>Telefone: (21) 97528-1482</a>
                </div>
            
                <a>Whatsapp: (21) 96578-9792</a>
            </div>
        </div>
        
      </div>
    )
}
