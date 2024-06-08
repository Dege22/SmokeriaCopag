import { AdBar } from '../components/AdBar'
import { Header } from '../components/Header'
import { register } from 'swiper/element/bundle'

import styles from './Home.module.css'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { SliderHome } from "../components/SliderHome";
import { InformationBanner } from "../components/InformationBanner";
import { NewsOfTheWeek } from '../components/NewsOfTheWeek'
import { Footer } from '../components/Footer'
import { SubFooter } from '../components/SubFooter'
import axios from 'axios'

await axios.get('https://api-pix-smokeria021.onrender.com/contar-acesso/home')

export function Home() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
      <SliderHome/>
      <InformationBanner/>
      <NewsOfTheWeek
        title='Ofertas imperdíveis'
      />
      <SubFooter/>
      <Footer/>
    </div>
    </div>
  )
}
