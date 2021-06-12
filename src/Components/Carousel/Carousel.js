/** @format */

import React, { useRef, useState } from 'react'
import styles from './Carousel.module.scss'
import CarouselItem from './CarouselItem'
import Dots from './Dots'
export default function Carousel() {
  let carouselContent = useRef()
  const [currentItem, setcurrentItem] = useState(1)
  let carouselData = [
    {
      name: 'post1',
      tittle: 'Moonstone Keychain',
      text: 'Choosing the Best Gemstone for Your Necklace and Jewelry'
    },
    {
      name: 'post2',
      tittle: 'Sapphire Keychain',
      text: 'Choosing the Best Gemstone for Your Necklace and Jewelry'
    },
    {
      name: 'addNew',
      tittle: 'Add a Wearable',
      text: 'Don’t See One You Like? Choosing the Best Gemstone for Your Necklace and Jewelry'
    }
  ]

  const handleSlide = e => {
    let { width } = carouselContent.current.getBoundingClientRect()
    let { scrollLeft } = carouselContent.current
    const nextItem = Math.round((1.3 * scrollLeft) / width) + 1
    if (nextItem !== currentItem) {
      setcurrentItem(nextItem)
    }
  }

  return (
    <>
      <div
        className={styles.carouselContent}
        ref={carouselContent}
        onScroll={e => {
          handleSlide(e)
        }}
      >
        {carouselData.map((data, i) => {
          return <CarouselItem postData={data} active={i + 1 === currentItem} />
        })}
      </div>
      <Dots currentSlide={currentItem} dotNumbers={carouselData} />
    </>
  )
}
