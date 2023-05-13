import Link from "next/link";
import styles from "../styles/Products.module.css";

const dataProduct = [
  {
    id: "1",
    productName: "The Sweater in Tosca",
    imgUrl: "img/product/product_1.jpeg",
    imgUrlThm: "img/product/product_1.1.jpg",
    price: 46.0,
    OldPrice: 86.0,
  },
  {
    id: "2",
    productName: "The Sweater in Tosca",
    imgUrl: "img/product/product_6_1.jpeg",
    imgUrlThm: "img/product/product_6.jpg",
    price: 46.0,
    OldPrice: 86.0,
  },
  {
    id: "3",
    productName: "The Sweater in Tosca",
    imgUrl: "img/product/product_7.jpeg",
    imgUrlThm: "img/product/product_7_1.jpg",
    price: 46.0,
    OldPrice: 86.0,
  },
  {
    id: "4",
    productName: "The Sweater in Tosca",
    imgUrl: "img/product/product_8.jpeg",
    imgUrlThm: "img/product/product_8_1.jpg",
    price: 46.0,
    OldPrice: 86.0,
  },
  {
    id: "5",
    productName: "The Sweater in Tosca",
    imgUrl: "img/product/product_4.jpeg",
    imgUrlThm: "img/product/product_4_1.jpg",
    price: 46.0,
    OldPrice: 86.0,
  },
  {
    id: "06",
    productName: "The Sweater in Tosca",
    imgUrl: "img/product/product_3.jpeg",
    imgUrlThm: "img/product/product_3_1.jpg",
    price: 46.0,
    OldPrice: 86.0,
  },
];

const Products = () => {
  return (
    <div className={`${styles["container"]} ${styles["product_title"]}`}>
      <section className={styles.products}>
        {dataProduct?.map((p, i) => (
          <div key={i} className={styles.product_card}>
            <div className={styles.product_img}>
              <div className={styles.thumbnail}>
                <Link href="/cart">
                  <img src={p.imgUrl} alt={p.productName} />
                </Link>
              </div>
              <div className={`${styles["thumbnail"]} ${styles["hover"]}`}>
                <Link href="/cart">
                  <img src={p.imgUrlThm} alt={p.productName} />
                </Link>
              </div>
              <div className={styles.actions}>
                <ul>
                  <li>
                    <Link href="/cart">
                      <i className="ri-star-line"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cart">
                      <i className="ri-eye-line"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.product_info}>
              <h2 className={styles.product_title}>{p.productName}</h2>
              <div className={styles.product_price}>
                <span className={styles.before}>${p.OldPrice}</span>
                <span className="">${p.price}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
      <div className={styles.btn}>
        <Link href="/#">More Products</Link>
      </div>
    </div>
  );
};

export default Products;
