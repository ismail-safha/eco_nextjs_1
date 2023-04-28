import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Top Nav */}
      <div className={styles.top_nav}>
        <div className={`${styles["container"]} ${styles["flex_content"]}`}>
          <p>Order Online Or Call Us: (001) 2222-55555</p>
          <ul className={styles.icon_link}>
            <li>
              <Link href="#">
                <i className="ri-instagram-line"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="ri-whatsapp-line"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* main header */}
      <div className={`${styles["container"]} ${styles["main_header"]}`}>
        {/* header_left */}
        <div className={styles.icon_header_left}>
          <i className="ri-user-line"></i>
          <i className="ri-star-line"></i>
        </div>
        {/* header_center */}
        <div className={styles.header_center}>
          <nav>
            <ul>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Product</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.logo}>NABIL_SHOP</div>
          <nav>
            <ul>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* header_right */}
        <div className={styles.icon_header_right}>
          <Link href="#">
            <span className="">0</span>
            <i className="ri-shopping-bag-line"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
