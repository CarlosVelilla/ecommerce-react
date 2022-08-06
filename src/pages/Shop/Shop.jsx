import products from "../../assets/data/products.json"
import ProductCard from "../../components/ProductCard/ProductCard"

import "./Shop.css"

function Shop() {
  return (
    <>
      <div className="movie_container">
        {products.map(({ id, movie_title, movie_genre, price }) => {
          return <ProductCard key={id} id={id} movie_title={movie_title} movie_genre={movie_genre} price={price} />
        })}
      </div>
    </>
  )
}

export default Shop