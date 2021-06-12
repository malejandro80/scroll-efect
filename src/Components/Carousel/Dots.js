/** @format */

import React from 'react'
import styles from './Carousel.module.scss'
export default function Dots({ currentSlide, dotNumbers }) {
  return (
    <div className={styles.dotContent}>
      {dotNumbers.map((data, i) => (
        <div
          className={currentSlide === parseInt(i + 1) ? styles.isActive : ''}
        ></div>
      ))}
    </div>
  )
}
