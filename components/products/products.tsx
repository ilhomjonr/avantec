"use client";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import styles from "./products.module.css";
import Link from "next/link";
import { chevron_right } from "@/public/icon";

export default function Products() {
  const productbtm: Variants = {
    hide: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
      },
    },
  };
  return (
    <section>
      <div className={`box ${styles.box}`}>
        <div className={styles.title_section}>
          <p className="section_title">План осуществления проекта​</p>
          <Link href={"/"} className={styles.seeall}>
            Посмотрит все {chevron_right}
          </Link>
        </div>
        <div className={styles.products}>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={productbtm}
          >
            <Link href={"/"} className={styles.product}>
              <p className={styles.product_title}>
                INDEX C100 Высокопроиз-водительный токарный автомат
              </p>
              <div className={styles.product_img_co}>
                <Image
                  src="/media/product.png"
                  alt="product"
                  className={styles.product_img}
                  width={316}
                  height={206}
                />
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={productbtm}
          >
            <Link href={"/"} className={styles.product}>
              <p className={styles.product_title}>
                INDEX C100 Высокопроиз-водительный токарный автомат
              </p>
              <div className={styles.product_img_co}>
                <Image
                  src="/media/product.png"
                  alt="product"
                  className={styles.product_img}
                  width={316}
                  height={206}
                />
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={productbtm}
          >
            <Link href={"/"} className={styles.product}>
              <p className={styles.product_title}>
                INDEX C100 Высокопроиз-водительный токарный автомат
              </p>
              <div className={styles.product_img_co}>
                <Image
                  src="/media/product.png"
                  alt="product"
                  className={styles.product_img}
                  width={316}
                  height={206}
                />
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={productbtm}
          >
            <Link href={"/"} className={styles.product}>
              <p className={styles.product_title}>
                INDEX C100 Высокопроиз-водительный токарный автомат
              </p>
              <div className={styles.product_img_co}>
                <Image
                  src="/media/product.png"
                  alt="product"
                  className={styles.product_img}
                  width={316}
                  height={206}
                />
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={productbtm}
          >
            <Link href={"/"} className={styles.product}>
              <p className={styles.product_title}>
                INDEX C100 Высокопроиз-водительный токарный автомат
              </p>
              <div className={styles.product_img_co}>
                <Image
                  src="/media/product.png"
                  alt="product"
                  className={styles.product_img}
                  width={316}
                  height={206}
                />
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={productbtm}
          >
            <Link href={"/"} className={styles.product}>
              <p className={styles.product_title}>
                INDEX C100 Высокопроиз-водительный токарный автомат
              </p>
              <div className={styles.product_img_co}>
                <Image
                  src="/media/product.png"
                  alt="product"
                  className={styles.product_img}
                  width={316}
                  height={206}
                />
              </div>
            </Link>
          </motion.div>
        </div>{" "}
        <Link href={"/"} className={styles.seeall_mb}>
          Посмотрит все {chevron_right}
        </Link>
      </div>
    </section>
  );
}
