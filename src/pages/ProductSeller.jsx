import { register } from 'swiper/element/bundle'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { AdBar } from '../components/AdBar'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SubFooter } from '../components/SubFooter'
import { SliderHome } from '../components/SliderHome'
import { InformationBanner } from '../components/InformationBanner'
import { ProductSellerPage } from './ProductSellerPage'
import axios from 'axios'

await axios.get('https://api-pix-smokeria021.onrender.com/contar-acesso/productSeller')

import styles from './ProductSeller.module.css'

export function ProductsSeller() {
  return (
    <div>
      <Header/>
      <div className={styles.container}>
        <SliderHome/>
        <ProductSellerPage/>
      </div>
    </div>
  )
}
