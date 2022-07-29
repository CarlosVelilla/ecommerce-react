import styles from "./Hero.module.css"

function Hero({ heroImage }) {
  return (
    <img src={heroImage} alt="Enjoy our services" className={styles.heroImg} />
  )
}

export default Hero