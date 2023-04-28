import Link from "next/link";
import React from "react";
import styles from "../styles/Products.module.css";

const Products = () => {
  return (
    <div className={`${styles["container"]} ${styles["product_title"]}`}>
      <section className={styles.products}>
        <div className={styles.product_card}>
          <div className={styles.product_img}>
            <div className={styles.thumbnail}>
              <img src="img/product/product_1.jpeg" alt="" />
            </div>
            <div className={`${styles["thumbnail"]} ${styles["hover"]}`}>
              <img src="img/product/product_2.jpeg" alt="" />
            </div>
            <div className={styles.actions}>
              <ul>
                <li>
                  <Link href="">
                    <i className="ri-star-line"></i>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <i className="ri-eye-line"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.product_info}>
            <h2 className={styles.product_title}>The Sweater in Tosca</h2>
            <div className={styles.product_price}>
              <span className={styles.before}>$86.00</span>
              <span className="">$46.00</span>
            </div>
          </div>
        </div>
        <div className={styles.product_card}>
          <div className={styles.product_img}>
            <div className={styles.thumbnail}>
              <img src="img/product/product_1.jpeg" alt="" />
            </div>
            <div className={`${styles["thumbnail"]} ${styles["hover"]}`}>
              <img src="img/product/product_2.jpeg" alt="" />
            </div>
            <div className={styles.actions}>
              <ul>
                <li>
                  <Link href="">
                    <i className="ri-star-line"></i>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <i className="ri-eye-line"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.product_info}>
            <h2 className={styles.product_title}>The Sweater in Tosca</h2>
            <div className={styles.product_price}>
              <span className={styles.before}>$86.00</span>
              <span className="">$46.00</span>
            </div>
          </div>
        </div>
        <div className={styles.product_card}>
          <div className={styles.product_img}>
            <div className={styles.thumbnail}>
              <img src="img/product/product_1.jpeg" alt="" />
            </div>
            <div className={`${styles["thumbnail"]} ${styles["hover"]}`}>
              <img src="img/product/product_2.jpeg" alt="" />
            </div>
            <div className={styles.actions}>
              <ul>
                <li>
                  <Link href="">
                    <i className="ri-star-line"></i>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <i className="ri-eye-line"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.product_info}>
            <h2 className={styles.product_title}>The Sweater in Tosca</h2>
            <div className={styles.product_price}>
              <span className={styles.before}>$86.00</span>
              <span className="">$46.00</span>
            </div>
          </div>
        </div>
        <div className={styles.product_card}>
          <div className={styles.product_img}>
            <div className={styles.thumbnail}>
              <img src="img/product/product_1.jpeg" alt="" />
            </div>
            <div className={`${styles["thumbnail"]} ${styles["hover"]}`}>
              <img src="img/product/product_2.jpeg" alt="" />
            </div>
            <div className={styles.actions}>
              <ul>
                <li>
                  <Link href="">
                    <i className="ri-star-line"></i>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <i className="ri-eye-line"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.product_info}>
            <h2 className={styles.product_title}>The Sweater in Tosca</h2>
            <div className={styles.product_price}>
              <span className={styles.before}>$86.00</span>
              <span className="">$46.00</span>
            </div>
          </div>
        </div>
        <div className={styles.product_card}>
          <div className={styles.product_img}>
            <div className={styles.thumbnail}>
              <img src="img/product/product_1.jpeg" alt="" />
            </div>
            <div className={`${styles["thumbnail"]} ${styles["hover"]}`}>
              <img src="img/product/product_2.jpeg" alt="" />
            </div>
            <div className={styles.actions}>
              <ul>
                <li>
                  <Link href="">
                    <i className="ri-star-line"></i>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <i className="ri-eye-line"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.product_info}>
            <h2 className={styles.product_title}>The Sweater in Tosca</h2>
            <div className={styles.product_price}>
              <span className={styles.before}>$86.00</span>
              <span className="">$46.00</span>
            </div>
          </div>
        </div>
        <div className={styles.product_card}>
          <div className={styles.product_img}>
            <div className={styles.thumbnail}>
              <img src="img/product/product_1.jpeg" alt="" />
            </div>
            <div className={`${styles["thumbnail"]} ${styles["hover"]}`}>
              <img src="img/product/product_2.jpeg" alt="" />
            </div>
            <div className={styles.actions}>
              <ul>
                <li>
                  <Link href="">
                    <i className="ri-star-line"></i>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <i className="ri-eye-line"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.product_info}>
            <h2 className={styles.product_title}>The Sweater in Tosca</h2>
            <div className={styles.product_price}>
              <span className={styles.before}>$86.00</span>
              <span className="">$46.00</span>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.btn}>
        <Link href="/#">More Products</Link>
      </div>
    </div>
  );
};

export default Products;
