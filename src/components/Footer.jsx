

import styles from '../styles/Footer.module.css'

export function Footer() {
    return (
      <div className={styles.footer}>
        <div>
          <p>Smokeria.021 - CNPJ: 52.285.037/0001-07 © Todos os direitos reservados. 2024</p>
        </div>

        <div className={styles.footerImg}>
            <img src='https://www.samathemes.com.br/assets/images/logo.png'/>
            <img src='https://cdn.awsli.com.br/production/static/whitelabel/lojaintegrada/img/logo-rodape-loja-pro.png?v=3b20af0'/>
        </div>
      </div>
    )
  }
  