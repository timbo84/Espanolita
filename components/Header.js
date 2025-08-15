'use client' 

import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./Header.module.css"

export default function Header() {
  const pathname = usePathname()

  const isReservationPage = pathname === "/reservations"

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            Munoz espanolita
            {/* <img src="/logo.jpg" alt="Logo" /> */}
          </Link>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/">Home</Link>
            </li>
            {!isReservationPage && (
              <>
                <li>
                  <Link href="#menu">Menu</Link>
                </li>
                <li>
                  <Link href="#about">About</Link>
                </li>
                <li>
                  <Link href="#contact">Contact</Link>
                </li>
              </>
            )}
            <li>
              <Link href="/reservations">Reservations</Link>
            </li>
          </ul>
          <div className={styles.mobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  )
}