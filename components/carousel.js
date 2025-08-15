"use client"
import { useState } from "react"
import styles from "./Carousel.module.css"

const images = [
  "/restaurant1.jpg",
  "/restaurant2.jpg",
  "/restaurant3.jpg",
  "/restaurant4.jpg",
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.imageWrapper}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className={styles.image} />
      </div>
      <button className={styles.prev} onClick={prevSlide}>‹</button>
      <button className={styles.next} onClick={nextSlide}>›</button>
    </div>
  )
}