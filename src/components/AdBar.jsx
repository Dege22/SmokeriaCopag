// src/components/AdBar.jsx
import { Warning  } from 'phosphor-react'
import styles from '../styles/AdBar.module.css';

export function AdBar() {
  return (
    <header className={styles.adBar}>
      <Warning 
        size={20}
        color='#FFFFFF'
      />
      <span>⚠️ Compre um leve dois, somente essa semana!</span>
    </header>
  );
}
