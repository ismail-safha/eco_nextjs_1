import React from "react";
import styles from "../styles/Products_title.module.css";

const Products_title = () => {
  return (
    <div className={`${styles["container"]} ${styles["product_title"]}`}>
      <h2>Products</h2>
    </div>
  );
};

export default Products_title;
