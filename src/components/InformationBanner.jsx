import { ShieldCheck, Truck, Percent, AirplaneTilt } from 'phosphor-react'

import styles from '../styles/InformationBanner.module.css'

export function InformationBanner() {
    return (
     <div className={styles.container}>
      <div  className={styles.informationContainer}>
        <Truck  
          size={30}
          weight='regular'
        />
        <div>
          <strong>Envio Expresso</strong>
          <a>em até 24 horas</a>
        </div>
      </div>

      <div  className={styles.informationContainer}>
        <Percent  
          size={35}
          weight='regular'
        />
        <div>
          <strong>Descontos de 11%</strong>
          <a>em compras Pagamento Pix</a>
        </div>
      </div>

      <div  className={styles.informationContainer}>
        <AirplaneTilt   
          size={35}
          weight='regular'
        />
        <div>
          <strong>Envio para todo brasil</strong>
          <a>envio expresso</a>
        </div>
      </div>

      <div  className={styles.informationContainer}>
        <ShieldCheck  
          size={35}
          weight='regular'
        />
        <div>
          <strong>Loja 100% segurança</strong>
          <a>selo de segurança</a>
        </div>
      </div>
     </div>
    )
  }
  