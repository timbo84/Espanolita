import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Navigation</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#menu">Menu</Link>
              </li>
              <li>
                <Link href="/reservations">Reservations</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>Legal</h3>
            <ul>
              <li>
                <Link href="#terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="#privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>Contact</h3>
            <ul>
              <li> Email: </li>
              <li> Phone Number: </li>
              <li> Address: </li>
              </ul>
            
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy;{currentYear}</p>
          <p>Created by JYT Software</p>
        </div>
      </div>
    </footer>
  );
}