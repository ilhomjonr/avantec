import Link from "next/link";
import styles from "./news.module.css";
import Image from "next/image";
import { chevron_right } from "@/public/icon";

export default function News() {
  return (
    <section>
      <div className={`box ${styles.box}`}>
        <div className={styles.title_section}>
          <p className="section_title">Новости компании</p>
          <Link href={"/"} className={styles.link_top}>
            Посмотрит все {chevron_right}
          </Link>
        </div>
        <div className={styles.news}>
          <Link href={"/"} className={styles.new}>
            <div className={styles.img_cont}>
              <Image
                src={"/media/news.png"}
                className={styles.img}
                alt="news"
                width={348}
                height={238}
              />
            </div>
            <div className={styles.product_btm}>
              <p className={styles.product_desc}>
                Приглашаем вас и ваших спетьсялистов посетить семинар на тему
                Index - Medical Solution
              </p>
              <div className={styles.product_btm1}>
                <p className={styles.day}>06.08.23</p>
                <p className={styles.link_btm}>
                  Подробнее
                  {chevron_right}
                </p>
              </div>
            </div>
          </Link>
          <Link href={"/"} className={styles.new}>
            <div className={styles.img_cont}>
              <Image
                src={"/media/news.png"}
                className={styles.img}
                alt="news"
                width={348}
                height={238}
              />
            </div>
            <div className={styles.product_btm}>
              <p className={styles.product_desc}>
                Приглашаем вас и ваших спетьсялистов посетить семинар на тему
                Index - Medical Solution
              </p>
              <div className={styles.product_btm1}>
                <p className={styles.day}>06.08.23</p>
                <p className={styles.link_btm}>
                  Подробнее
                  {chevron_right}
                </p>
              </div>
            </div>
          </Link>{" "}
          <Link href={"/"} className={styles.new}>
            <div className={styles.img_cont}>
              <Image
                src={"/media/news.png"}
                className={styles.img}
                alt="news"
                width={348}
                height={238}
              />
            </div>
            <div className={styles.product_btm}>
              <p className={styles.product_desc}>
                Приглашаем вас и ваших спетьсялистов посетить семинар на тему
                Index - Medical Solution
              </p>
              <div className={styles.product_btm1}>
                <p className={styles.day}>06.08.23</p>
                <p className={styles.link_btm}>
                  Подробнее
                  {chevron_right}
                </p>
              </div>
            </div>
          </Link>{" "}
          <Link href={"/"} className={styles.new}>
            <div className={styles.img_cont}>
              <Image
                src={"/media/news.png"}
                className={styles.img}
                alt="news"
                width={348}
                height={238}
              />
            </div>
            <div className={styles.product_btm}>
              <p className={styles.product_desc}>
                Приглашаем вас и ваших спетьсялистов посетить семинар на тему
                Index - Medical Solution
              </p>
              <div className={styles.product_btm1}>
                <p className={styles.day}>06.08.23</p>
                <p className={styles.link_btm}>
                  Подробнее
                  {chevron_right}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
