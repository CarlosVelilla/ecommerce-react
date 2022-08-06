import NavBar from "../NavBar/NavBar"
import ShoppingCartIcon from "../ShoppingCartIcon/ShoppingCartIcon"

import logo from "../../assets/icons/logo.svg"
import userIcon from "../../assets/icons/user.svg"

// import styles from "./Header.module.css"
import { StyledHeader } from "../ui/StyledHeader/StyledHeader"

function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="Our company logo" />
      <NavBar />
      <div>
        <ShoppingCartIcon />
        <button>
          <img src={userIcon} alt="Log in" />
          <span>Log in</span>
        </button>
      </div>
    </StyledHeader>
  )
}

export default Header