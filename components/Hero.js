import Link from "next/link"
import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Authentic Spanish Cuisine</h1>
        <p>Experience the rich flavors of Spain in our elegant restaurant, where tradition meets culinary excellence</p>
        <div className={styles.heroButtons}>
          <Link href="/reservations" className="btn btn-primary">
            Reserve a Table
          </Link>
          <Link href="#menu" className="btn">
            View Menu
          </Link>
        </div>
      </div>
    </section>
  )
}
