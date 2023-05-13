import styles from "../styles/cart.module.css";

const cart = () => {
  return (
    <section className={`${styles["container"]} ${styles["cart_section"]}`}>
      <div className={styles.wrapper_product}>
        {/* left */}
        <div
          className={`${styles["image_product"]} ${styles["swaper_cart_product"]}`}
        >
          {/* ======start swap ========== */}
          <img src="img/product/product_1.jpeg" alt="" />

          {/* =========end swap======= */}
        </div>
        {/* right */}

        <div className={styles.summery_product}>
          <div className="entry">
            <h1 className="title">The Sweater in</h1>

            <div className={styles.product_group}>
              <div className={styles.product_price}>
                <span className="current">$45.00</span>
                <div className={styles.wrap}>
                  <span className={styles.before}>$62.00</span>
                  <span className={styles.discount}>-25%</span>
                </div>
              </div>
              <div className={styles.product_rating}>
                <span>
                  <i className="ri-star-fill"></i>
                  <span>4.8</span>
                </span>
              </div>
            </div>

            <div className={styles.product_size}>
              <span>Size:</span>
              <div className={styles.wrap_has}>
                <button className="">S</button>
                <button className="">M</button>
                <button className="selected">L</button>
                <button>XL</button>
              </div>
            </div>

            <div className={styles.product_stock}>
              <strong>201</strong>
              <span className="grey-color">in stock</span>
              <i className="ri-checkbox-circle-line"></i>
            </div>

            <div className={styles.product_action}>
              <div className={styles.addCart}>
                <button type="submit" className="primary-btn">
                  Add to cart
                </button>
              </div>
            </div>

            <div className={styles.shipping}>
              <ul>
                <li>
                  <i className="ri-gift-line"></i>
                  <span>Free shipping & return</span>
                  <span className="grey-color">On orders over $100</span>
                </li>
                <li>
                  <i className="ri-truck-line"></i>
                  <span>Estimate Delivery:</span>
                  <span className="grey-color"> 01-07 jan, 2023 </span>
                </li>
              </ul>
            </div>
            <div className={styles.description_product}>
              <p>
                <strong>Every time the AJ1</strong>
                gets a remake, you get the classic sneaker in new colours and
                textures for an exciting, revamped look but with all the
                familiar comforts you know. Premium materials and accents give
                modern expression to an all-time favourite.
              </p>
              <ul>
                <li>Colour Shown: White/Black/Ice Blue</li>
                <li>Style: DV1308-104</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default cart;
