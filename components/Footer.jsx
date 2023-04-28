import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.pie_pagina}>
      <div className={styles.grupo_1}>
        <div className={styles.box}>
          <figure>
            <a href="#">
              <img src="img/logotipo-sleedw.svg" alt="Logo de SLee Dw" />
            </a>
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
            <Link href="#" className="fa fa-facebook">
              x
            </Link>
            <Link href="#" className="fa fa-instagram">
              x
            </Link>
            <Link href="#" className="fa fa-twitter">
              x
            </Link>
            <Link href="#" className="fa fa-youtube">
              x
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.grupo_2}>
        <small>
          &copy; 2021 <b>SLee Dw</b> - Todos los Derechos Reservados.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
