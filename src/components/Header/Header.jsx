import NavBar from "../NavBar/NavBar"
import logo from "../../assets/icons/logo.svg"
import shoppingIcon from "../../assets/icons/shopping-cart.svg"
import userIcon from "../../assets/icons/user.svg"

import styles from "./Header.module.css"

function Header() {
  return (
    <header className={styles.header__container}>
      <img src={logo} alt="Our company logo" />
      <NavBar />
      <div>
        <img src={shoppingIcon} alt="Your shopping cart" />
        <button>
          <img src={userIcon} alt="Log in" />
          <span>Log in</span>
        </button>
      </div>
    </header>
  )
}

export default Header