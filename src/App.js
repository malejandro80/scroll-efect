/** @format */

import logo from './logo.svg'
import styles from './App.module.scss'
import NavMenu from './Components/NavMenu/NavMenu'
import Carousel from './Components/Carousel/Carousel'
import background from './assets/images/Background.png'
import Avatar from './Components/Avatar/Avatar'

function App() {
  return (
    <div className={styles.app}>
      <img src={background} />
      <Avatar />
      <div>
        <Carousel />
      </div>
      <NavMenu />
    </div>
  )
}

export default App
