import styles from "./About.module.css"

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2>Our Story</h2>
            <p>
              For over three generations, our family has been perfecting the art of authentic Spanish cuisine. What
              started as a small taverna in Valencia has grown into a celebration of Spain's rich culinary heritage.
            </p>
            <p>
              Every dish is prepared with the finest ingredients imported directly from Spain, ensuring that each bite
              transports you to the sun-soaked shores of the Mediterranean.
            </p>
            <p>
              Our master chefs use traditional techniques passed down through generations, combined with the freshest
              local ingredients to create an unforgettable dining experience.
            </p>
          </div>
          <div className={styles.aboutImage}>
            <img src="/spanish-chef-paella.png" alt="Chef preparing traditional paella" />
          </div>
        </div>
      </div>
    </section>
  )
}
