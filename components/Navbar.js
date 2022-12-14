import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navar.module.css'
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/profile">
          <a>Profile</a>
        </Link>
        <Link href="/coins">
          <a>coins</a>
        </Link>
        <Link href="/contact">
          <a>자기소개</a>
        </Link>
      </div>
    </div>
  )
}
