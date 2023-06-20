"use client";
import { Variants, motion } from "framer-motion";
import styles from "./about.module.css";

import Image from "next/image";
import img from "../../public/media/things.png";
export default function About() {
  const about_left: Variants = {
    hide: {
      opacity: 0,
      x: -500,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  const about_right: Variants = {
    hide: {
      opacity: 0,
      x: 500,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  const things = [
    {
      logo: "/media/catalog1.png",
      desc: "Производство больших партий",
    },
    {
      logo: "/media/catalog2.png",
      desc: "Высокая точность работы и качество деталей",
    },
    {
      logo: "/media/catalog3.png",
      desc: "Обработка заготовок из различных металлов",
    },
    {
      logo: "/media/catalog4.png",
      desc: "Изготовление деталей любой конфигурации и сложности",
    },
  ];

  return (
    <section>
      <div className={styles.things_top}>
        <div className={styles.things}>
          {things.map((thing: any, i: number) => {
            return (
              <div key={i} className={styles.thing}>
                <div className={styles.img}>
                  <Image
                    src={thing.logo}
                    width={56}
                    height={56}
                    alt="catalog products"
                  />
                </div>
                <p className={styles.thing_desc}>{thing.desc}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.solution}>
          <motion.div
            initial="hide"
            whileInView="show"
            variants={about_left}
            exit="hide"
          >
            <div className={styles.top_info}>
              <p className={`${styles.section_title} section_title`}>
                развитие, применение новейших технологий и инновационных решений
              </p>
              <p className="section_desc">
                ООО "AVANTEC GP" предоставляет свои услуги по обработке деталей
                с 2017 года. Грамотная организация производственных процессов и
                применение инновационных методов обработки позволяют существенно
                сократить рабочее время сохраняя при этом стабильно высокое
                качество деталей
              </p>
              <p className="section_desc">
                Современное оборудование, а также штат высококвалифицированных
                сотрудников позволяют фирме «Сергели Металл Конструкция»
                эффективно выполнять даже самые сложные заказы, в установленные
                сроки и с конкурентоспособной ценовой стратегией.
              </p>
              <div className={styles.btns}>
                <button className="primary_btn">Свяжется с нами</button>
                <button className="secondary_btn">Подробнее</button>
              </div>
              <div className={styles.dids}>
                <div className={styles.didwhat}>
                  <p className={styles.did_title}>Завершенный проект</p>
                  <p className={styles.did_numb}>8</p>
                  <p className={styles.did_desc}>стран</p>
                </div>
                <div className={styles.didwhat}>
                  <p className={styles.did_title}>Оснащено техники</p>
                  <p className={styles.did_numb}>1500</p>
                  <p className={styles.did_desc}>единиц</p>
                </div>
                <div className={styles.didwhat}>
                  <p className={styles.did_title}>Реализовано</p>
                  <p className={styles.did_numb}>600</p>
                  <p className={styles.did_desc}>проекта</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            variants={about_right}
            exit="hide"
          >
            <div className={styles.image}>
              <Image
                src="/media/things.png"
                alt="image"
                width={543}
                height={615}
              />
            </div>
          </motion.div>
        </div>
        <div className={styles.solution_mb}>
          <div className={styles.top_info}>
            <p className={`${styles.section_title} section_title`}>
              развитие, применение новейших технологий и инновационных решений
            </p>
            <div className={styles.image}>
              <Image src={img} alt="image" />
            </div>
            <p className="section_desc">
              ООО "AVANTEC GP" предоставляет свои услуги по обработке деталей с
              2017 года. Грамотная организация производственных процессов и
              применение инновационных методов обработки позволяют существенно
              сократить рабочее время сохраняя при этом стабильно высокое
              качество деталей
            </p>
            <p className="section_desc">
              Современное оборудование, а также штат высококвалифицированных
              сотрудников позволяют фирме «Сергели Металл Конструкция»
              эффективно выполнять даже самые сложные заказы, в установленные
              сроки и с конкурентоспособной ценовой стратегией.
            </p>
            <div className={styles.btns}>
              <button className="primary_btn">Свяжется с нами</button>
              <button className="secondary_btn">Подробнее</button>
            </div>
            <div className={styles.dids}>
              <div className={styles.didwhat}>
                <p className={styles.did_title}>Завершенный проект</p>
                <p className={styles.did_numb}>8</p>
                <p className={styles.did_desc}>стран</p>
              </div>
              <div className={styles.didwhat}>
                <p className={styles.did_title}>Оснащено техники</p>
                <p className={styles.did_numb}>1500</p>
                <p className={styles.did_desc}>единиц</p>
              </div>
              <div className={styles.didwhat}>
                <p className={styles.did_title}>Реализовано</p>
                <p className={styles.did_numb}>600</p>
                <p className={styles.did_desc}>проекта</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
