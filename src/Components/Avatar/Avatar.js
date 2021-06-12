/** @format */

import React from 'react'
import AvatarImg from '../../assets/images/ProfilePhoto.png'
import styles from './Avatar.module.scss'

export default function Avatar() {
  return (
    <div className={styles.AvatarContent}>
      <img src={AvatarImg} alt='AvatarImg' />
      <h3>Lottie Curtis</h3>
      <button>You have 3 Products</button>
    </div>
  )
}
