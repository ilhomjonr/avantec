"use client";
import { Variants, motion } from "framer-motion";
import { cup, hand_stars, pie_chart } from "@/public/icon";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import styles from "./intro.module.css";
import img from "../../public/media/intro.png";

export default function Intro() {
  // const { ref, inView, entry } = useInView(Option);
  const introHeaderVariantsLeft: Variants = {
    hide: {
      opacity: 0,
      x: 200,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
      },
    },
  };
  const introHeaderVariantsRight: Variants = {
    hide: {
      opacity: 0,
      x: -200,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
      },
    },
  };
  return (
    <>
      <section className={styles.intro}>
        <div className={`${styles.box} box`}>
          <div className={styles.top}>
            <motion.div
              initial="hide"
              whileInView="show"
              variants={introHeaderVariantsRight}
            >
              <div className={styles.info}>
                <div className={styles.info_top}>
                  <p className={styles.title}>
                    разработку и интеграцию систем автоматизации
                  </p>
                  <p className={styles.desc}>
                    высокоточные, высокопроизводительные, многофункциональные и
                    экономичные обрабатывающие центры
                  </p>
                </div>
                <div className={styles.btns}>
                  <button className={`primary_btn`}>Свяжется с нами</button>
                  <button className={`secondary_btn ${styles.right}`}>
                    Каталог продукции
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hide"
              whileInView="show"
              variants={introHeaderVariantsLeft}
            >
              {" "}
              <div className={styles.img_container}>
                <div className={styles.image}>
                  <Image src={img} alt="intro img" />
                </div>
              </div>{" "}
            </motion.div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.advantage}>
              <div className={styles.advant_svg}>{hand_stars}</div>
              <p className={styles.advantage_desc}>
                Огромное количество благодарных клиентов
              </p>
            </div>
            <div className={styles.advantage}>
              <div className={styles.advant_svg}>{cup}</div>
              <p className={styles.advantage_desc}>Сотни успешных проектов</p>
            </div>
            <div className={styles.advantage}>
              <div className={styles.advant_svg}>{pie_chart}</div>
              <p className={styles.advantage_desc}>
                10 лет профессионалы опыта
              </p>
            </div>
          </div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={introHeaderVariantsRight}
            className={styles.bottom_mobile}
          >
            <div className={styles.advantage}>
              <div className={styles.advant_svg}>{hand_stars}</div>
              <p className={styles.advantage_desc}>
                Огромное количество благодарных клиентов
              </p>
            </div>
            <div className={styles.ad_btm_mb}>
              <div className={styles.advantage}>
                <div className={styles.advant_svg}>{cup}</div>
                <p className={styles.advantage_desc}>Сотни успешных проектов</p>
              </div>
              <div className={styles.advantage}>
                <div className={styles.advant_svg}>{pie_chart}</div>
                <p className={styles.advantage_desc}>
                  10 лет профессионалы опыта
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
