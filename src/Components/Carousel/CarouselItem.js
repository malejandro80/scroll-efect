/** @format */

import React from 'react'
import styles from './Carousel.module.scss'
import rock1 from '../../assets/images/rock_1.svg'
import rock2 from '../../assets/images/rock_2.svg'
import add from '../../assets/icons/Oval.svg'

export default function CarouselItem({ postData, active }) {
  const selectImg = type => {
    switch (type) {
      case 'post1':
        return rock1
        break
      case 'post2':
        return rock2
        break
      case 'addNew':
        return add
        break

      default:
        return rock1
        break
    }
  }
  return (
    <div className={`${styles.carouselItem} ${active ? styles.isActive : ''}`}>
      <img
        src={selectImg(postData.name)}
        alt='rock'
        className={postData.name === 'addNew' ? styles.addIcon : ''}
      />
      <h1>{postData.tittle}</h1>
      <p>{postData.text}</p>
      <button style={postData.name === 'addNew' ? { display: 'none' } : {}}>
        VIEW
      </button>
    </div>
  )
}
