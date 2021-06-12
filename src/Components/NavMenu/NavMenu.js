/** @format */

import React from 'react'
import styles from './NavMenu.module.scss'
import wearablesIcon from '../../assets/icons/category-24px.png'
import circle from '../../assets/icons/help_outline-24px.png'

export default function NavMenu() {
  return (
    <div className={styles.navContainer}>
      <ul>
        <li>
          <img src={wearablesIcon} />
          <span>Weareables</span>
        </li>
        <li>
          <img src={circle} />
          <span>Weareables</span>
        </li>
        <li>
          <img src={circle} />
          <span>Weareables</span>
        </li>
      </ul>
    </div>
  )
}
