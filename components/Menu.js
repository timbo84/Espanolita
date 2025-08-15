"use client"
import { useState } from "react"
import styles from "./Menu.module.css"

const menuItems = {
  paellas: [
    {
      name: "Paella Valenciana",
      image: "/paella-valenciana.jpg",
      description: "Traditional paella with chicken, rabbit, beans, and saffron",
      price: "$28",
    },
    {
      name: "Paella de Mariscos",
      image: "/paella-mariscos.jpg",
      description: "Seafood paella with prawns, mussels, clams, and squid",
      price: "$32",
    },
    {
      name: "Paella Mixta",
      image: "/paella-mixta.jpg",
      description: "Mixed paella with chicken, seafood, and vegetables",
      price: "$30",
    },
  ],
  tapas: [
    {
      name: "Jamón Ibérico",
      image: "/jamon-iberico.jpg",
      description: "Premium Iberian ham served with manchego cheese",
      price: "$18",
    },
    {
      name: "Patatas Bravas",
      image: "/patatas-bravas.jpg",
      description: "Crispy potatoes with spicy tomato sauce and aioli",
      price: "$12",
    },
    {
      name: "Gambas al Ajillo",
      image: "/gambas-al-ajillo.jpg",
      description: "Garlic prawns cooked in olive oil with chili",
      price: "$16",
    },
  ],
  desserts: [
    {
      name: "Crema Catalana",
      image: "/crema-catalana.jpg",
      description: "Traditional Catalan custard with caramelized sugar",
      price: "$8",
    },
    {
      name: "Churros con Chocolate",
      image: "/churros-chocolate.jpg",
      description: "Fresh churros served with thick hot chocolate",
      price: "$10",
    },
  ],
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(null)

  const displayedItems = activeCategory
    ? menuItems[activeCategory]
    : Object.values(menuItems).flat()

  return (
    <section id="menu" className={styles.menu}>
      <div className="container">
        <h2 className={styles.menuTitle}>Our Menu</h2>

        <div className={styles.menuCategories}>
          <button
            className={`${styles.categoryBtn} ${activeCategory === null ? styles.active : ""}`}
            onClick={() => setActiveCategory(null)}
          >
            All
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "paellas" ? styles.active : ""}`}
            onClick={() => setActiveCategory("paellas")}
          >
            Paellas
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "tapas" ? styles.active : ""}`}
            onClick={() => setActiveCategory("tapas")}
          >
            Tapas
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "desserts" ? styles.active : ""}`}
            onClick={() => setActiveCategory("desserts")}
          >
            Desserts
          </button>
        </div>

        <div className={styles.menuGrid}>
          {displayedItems.map((item, index) => (
            <div key={index} className={styles.menuItem}>
              <h3>{item.name}</h3>
              <img src={item.image} alt={item.name} className={styles.menuImage} />
              <p>{item.description}</p>
              <div className={styles.price}>{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}