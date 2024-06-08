// src/components/NewsOfTheWeek.jsx
import React, { useState } from 'react';
import styles from '../styles/NewsOfTheWeek.module.css';
import { Product } from './Product';
import { dbProducts } from '../db/DbProducts';


export function NewsOfTheWeek(props) {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(true);
  };

  const productsToShow = showAll ? dbProducts : dbProducts.slice(0, 20); // Exibir 4 linhas (20 produtos)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src='/src/assets/ofertasimperdiveis.svg'/>
      </header>
      <div className={styles.productsContainer}>
        {dbProducts.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            valueSeller={item.valueSeller}
            oldValue={item.oldValue}
            assessment={item.assessment}
          />
        ))}
      </div>
      {!showAll && (
        <div className={styles.moreProducts} onClick={handleShowMore}>
          <p>Mais produtos</p>
        </div>
      )}
    </div>
  );
}



