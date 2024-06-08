import { MagnifyingGlass, ShoppingBag, House, FlowerLotus, Phone } from 'phosphor-react'

import styles from '../styles/Header.module.css'
import { AdBar } from './AdBar'

import { useNavigate } from 'react-router-dom'


export function Header() {

  const navigate = useNavigate();

  const goHome = () => {
      navigate('/');
  };

  const goAllProducts = () => {
      navigate('/allproducts');
  };

    return (
        <header className={styles.container}>
        <AdBar/>
          <div className={styles.header} >
            <div className={styles.iconSearch} >
              <MagnifyingGlass 
                  size={30}
                  weight='bold'
              />
            </div>

            <div className={styles.iconEcommerce} >
              <img src='/src/assets/smokeria-021-v1-dwhrm9cim9.webp' />
            </div>
            
            <div className={styles.iconCart} >
              <ShoppingBag 
                  size={30}
                  weight='bold'
              />
            </div>
          </div>

        <div className={styles.categories} >
          <div>
            <button onClick={goHome} className={styles.categoriesIcon}>
                <img href='/' src='/src/assets/1.webp'/>
                <a  >Inicio</a>
            </button>

              <div onClick={goAllProducts} className={styles.categoriesIcon}>
                <img src='/src/assets/certo.webp'/>
                <a href='/products' >Produtos</a>
              </div>

              <div className={styles.categoriesIcon}>
                <img src='/src/assets/1.webp'/>
                <a href='/contact' >Contato</a>
              </div>
          </div>
        </div>
      </header>
    )
  }
  