import React, { useState } from 'react';
import styles from '../styles/Counter.module.css';

export function Counter() {
    const [count, setCount] = useState(1);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 1 ? count - 1 : 1);

    return (
        <div className={styles.counter}>
            <button onClick={decrement} className={styles.button}>-</button>
            <span className={styles.count}>{count}</span>
            <button onClick={increment} className={styles.button}>+</button>
        </div>
    );
}
