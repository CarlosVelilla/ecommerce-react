import { StyledLink } from "./StyledNavBar"

function NavBar() {
  return (
    <div>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/shop">Shop</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </div>
  )
}

export default NavBar