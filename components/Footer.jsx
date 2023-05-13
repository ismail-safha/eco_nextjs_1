import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.pie_pagina}>
      <div className={styles.grupo_1}>
        <div className={styles.box}>
          <figure>
            <h1>Nabil_shop</h1>
          </figure>
        </div>
        <div className={styles.box}>
          <h2>SOBRE NOSOTROS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?
          </p>
        </div>
        <div className={styles.box}>
          <h2>SIGUENOS</h2>
          <div className={styles.red_social}>
            <Link href="#">
              <i className="ri-facebook-line"></i>
            </Link>
            <Link href="#">
              <i className="ri-instagram-line"></i>
            </Link>
            <Link href="#">
              <i className="ri-twitter-line"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.grupo_2}>
        <small>
          &copy; 2023 <b>ismailsafha</b> - Todos los Derechos Reservados.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
