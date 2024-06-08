import styles from '../styles/Product.module.css'
import { useNavigate } from 'react-router-dom'

export function Product({ id, img, title, assessment, valueSeller, oldValue }) {

  const navigate = useNavigate();

  const handleBuyNow = () => {
      navigate(`/productseller/${id}`);
  };

    return (
     <a className={styles.container}>
        <img src={img} />
        <div>
            <div className={styles.productInfos}>
              <header>{title}</header>
              <spam>⭐⭐⭐⭐⭐</spam><a>({assessment})</a>
              <div>
                <strong>R$ {valueSeller}</strong>{' '}
                <a>via Pix</a>{' '}
              </div>
              <div>
                <span className={styles.realValue}>R$ {oldValue}</span>{' '}
                <a className={styles.sellerValue}>R$ {valueSeller}</a>{' '}
              </div>
              <a>até 11%OFF no Pix</a>
            </div>
        </div>
        <footer>
            <button type='submit' onClick={handleBuyNow}>Comprar agora</button>
        </footer>
     </a>
    )
}

