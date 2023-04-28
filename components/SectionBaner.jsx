import React from "react";
import styles from "../styles/SectionBaner.module.css";

const SectionBaner = () => {
  return (
    <section className={styles.section_banar}>
      <div className={styles.overly}></div>
      <img src="img/banar.jpeg" alt="" />
      <h1>New Arrival Sale 50% OFF Limited Time Offer</h1>
    </section>
  );
};

export default SectionBaner;
