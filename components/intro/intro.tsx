import { cup, hand_stars, pie_chart } from "@/public/icon";
import Image from "next/image";
import styles from "./intro.module.css";
export default function Intro() {
  return (
    <>
      <section className={styles.intro}>
        <div className={`${styles.box} box`}>
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
              <button className={`secondary_btn`}>Каталог продукции</button>
            </div>
            <div className={styles.bottom}>
              <div className={styles.advantage}>
                <div className={styles.advant_svg}>{hand_stars}</div>{" "}
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
          </div>
          <div className={styles.image}>
            <Image
              src="/media/intro.png"
              width={826}
              height={466}
              alt="intro img"
            />
          </div>
        </div>
      </section>
    </>
  );
}
