import { useContext, useState } from "react"
import { currency } from "../../App"

import { ShoppingCartContext } from "../../contexts/ShoppingCart"

import "./ProductCard.css"

import { StyledButton, StyledSecondaryButton } from "../ui/StyledButton/StyledButton"

function ProductCard({ id, movie_title, movie_genre, price }) {
  const [selected, setSelected] = useState(false)
  const { setCart } = useContext(ShoppingCartContext)

  const handleClick = () => {
    setSelected(prevState => !prevState)
    // setCart(prevState => {
    //   const test = prevState.find(product => {
    //     return product.id === id
    //   })
    // })
  }

  return (
    <div className="product_card">
      <h2>{movie_title}</h2>
      <div className="product_card__info">
        <p>{movie_genre}</p>
        <p className="product_card__info--price">{price}{currency}</p>
      </div>
      <StyledButton selected={selected} scale={4} onClick={handleClick}>{selected === false ? "Buy" : "Undo"}</StyledButton>
      <StyledSecondaryButton selected={selected} scale={2} onClick={handleClick}>{selected === false ? "Buy" : "Undo"}</StyledSecondaryButton>
    </div>
  )
}

export default ProductCard