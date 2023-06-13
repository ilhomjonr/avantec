import styles from "./about.module.css";
import { catalog1, catalog2, catalog3, catalog4 } from "../../public/icon";
import Image from "next/image";
export default function About() {
  const things = [
    {
      logo: catalog1,
      desc: "Производство больших партий",
    },
    {
      logo: catalog2,
      desc: "Высокая точность работы и качество деталей",
    },
    {
      logo: catalog3,
      desc: "Обработка заготовок из различных металлов",
    },
    {
      logo: catalog4,
      desc: "Изготовление деталей любой конфигурации и сложности",
    },
  ];
  const donethings = [{}];
  return (
    <section>
      <div className={styles.things_top}>
        <div className={styles.things}>
          {things.map((thing: any, i: number) => {
            return (
              <div key={i} className={styles.thing}>
                {thing.logo}
                <p className={styles.thing_desc}>{thing.desc}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.solution}>
          <div className={styles.top_info}>
            <p className="section_title">
              развитие, применение новейших технологий и инновационных решений{" "}
            </p>
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
                <p className={styles.did_desc}>стран</p>
              </div>
              <div className={styles.didwhat}>
                <p className={styles.did_title}>Реализовано</p>
                <p className={styles.did_numb}>600</p>
                <p className={styles.did_desc}>стран</p>
              </div>
            </div>
          </div>
          <div className={styles.image}>
            <Image
              src="/media/things.png"
              alt="image"
              width={543}
              height={615}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
