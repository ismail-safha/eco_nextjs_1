import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  useEffect(() => {
    let handleer = () => {
      setShowNavbar(false);
    };
    document.addEventListener("mousedown", handleer);
  });

  return (
    <>
      <header className={styles.header}>
        {/* Top Nav */}
        <div className={styles.top_nav}>
          <div className={`${styles["container"]} ${styles["flex_content"]}`}>
            <div className={styles.phone}>
              <p>Order Online Or Call Us:</p>
              <span>+2126 56 256 856</span>
            </div>
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
            <Link href="#" className={styles.user_icon}>
              <i className="ri-user-line"></i>
            </Link>
            {/* start icon mobile */}
            <div className={styles.menu_bar} onClick={handleShowNavbar}>
              <i className="ri-menu-line"></i>
            </div>

            {/* start icon mobile */}
          </div>
          {/* header_center */}
          <div className={styles.header_center}>
            <nav>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="#">Product</Link>
                </li>
              </ul>
            </nav>
            <div className={styles.logo}>
              <Link href="/">RUGS_SHOP</Link>
            </div>
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
      {/* start mobile  */}
      {/* {`${styles["mobile_menu"]} ${showNavbar && "active"}   }`} */}
      <div
        className={styles.mobile_menu}
        style={{ width: showNavbar ? "50vw" : "" }}
      >
        <div className={styles.icon} onClick={handleShowNavbar}>
          {showNavbar ? "X" : ""}
        </div>
        <ul>
          <li>
            <Link href="/" className="" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="" to="/">
              Blog
            </Link>
          </li>

          <li>
            <Link href="#" className="" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#" className="" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* end mobile  */}
    </>
  );
};

export default Header;
