import { register } from 'swiper/element/bundle'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { NewsOfTheWeek } from '../components/NewsOfTheWeek'
import { Footer } from '../components/Footer'
import { SubFooter } from '../components/SubFooter'

import styles from './AllProducts.module.css'
import { Header } from '../components/Header'
import axios from 'axios'

await axios.get('https://api-pix-smokeria021.onrender.com/contar-acesso/allProducts')

export function AllProducts() {


  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.allProducts}>
      <NewsOfTheWeek
        title='Todos os produtos'
      />
      <SubFooter/>
      <Footer/>
      </div>
    </div>
  )
}
