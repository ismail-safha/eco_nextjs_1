import React from "react";
import styles from "../styles/NewsletterSection.module.css";

const NewsletterSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return <section className={styles.section_banar}></section>;
};

export default NewsletterSection;
