// src/components/SliderHome.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styles from '../styles/SliderHome.module.css';


const data = [
  { id: '1', image: 'https://cdn.awsli.com.br/1920x1920/2080/2080656/banner/banner-1-s8eq3xm2lz.png' },
  { id: '2', image: 'https://cdn.awsli.com.br/1920x1920/2080/2080656/banner/banner-grande-1-v8q5ub74nt.png' },
  { id: '3', image: 'https://cdn.awsli.com.br/1920x1920/2080/2080656/banner/banner-3-grande-gjnnszhaug.png' },
  { id: '4', image: 'https://cdn.awsli.com.br/1920x1920/2080/2080656/banner/banner-grande-2-n6shgo8dpf.png' },
];

export function SliderHome() {
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet ${styles.swiperPaginationBullet}`,
          bulletActiveClass: `swiper-pagination-bullet-active ${styles.swiperPaginationBulletActive}`,
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className={styles.swiperSlide}>
            <img
              src={item.image}
              alt='Slider Main Page'
              className={styles.slideItems}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
