import Link from "next/link";
import styles from "./Header.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.glowLayer} />
      <div className={styles.highlightLayer} />
      <div className={styles.topLine} />
      <div className={styles.subLine} />

      <div className={styles.inner}>
        <h1 className={styles.title}>
          <Link href="/">Falcon&apos;s Aerie</Link>
        </h1>

        <nav className={styles.nav}>
          <Link
            href="/about"
            className={styles.navLink}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={styles.navLink}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}