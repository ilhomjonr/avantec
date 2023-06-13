import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";
import { facebook, instagram, linkedin, youtube } from "@/public/icon";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.box}>
        <div className={styles.contact}>
          <Link className={styles.logo} href={"/"}>
            <Image
              src={"/media/logowhite.png"}
              width={137}
              height={47}
              alt="logo"
            />
          </Link>
          <div className={styles.contacts_btm}>
            <div className={styles.email}>
              <a
                href={`mailto: info@avantecgp.com`}
                target={"_blank"}
                rel="noreferrer"
              >
                info@avantecgp.com
              </a>
            </div>
            <div className={styles.number}>
              <a
                href={`tel:+998 90 921 62 01 `}
                target={"_blank"}
                rel="noreferrer"
              >
                +998 90 921 62 01
              </a>
            </div>
            <p className={styles.location}>
              Tashkent region, Mustakillik street 126, Almalyk City, Republic of
              Uzbekistan
            </p>
            <div className={styles.social_media}>
              <Link href={"/"}>{youtube}</Link>
              <Link href={"/"}>{facebook}</Link>
              <Link href={"/"}>{instagram}</Link>
              <Link href={"/"}>{linkedin}</Link>
            </div>
          </div>
        </div>
        <div className={styles.company}>
          <p className={styles.title}>Компания</p>
          <Link href={"/"} className={styles.foot_link}>
            О компании
          </Link>
          <Link href={"/"} className={styles.foot_link}>
            Новости
          </Link>
          <Link href={"/"} className={styles.foot_link}>
            Партнеры
          </Link>
          <Link href={"/"} className={styles.foot_link}>
            Клиенты
          </Link>
          <Link href={"/"} className={styles.foot_link}>
            Контакт
          </Link>
        </div>
        <div className={styles.service}>
          <p className={styles.title}>Услуги</p>
          <Link href={"/"} className={styles.foot_link}>
            Технология под ключ
          </Link>
          <Link href={"/"} className={styles.foot_link}>
            CAD CAM программное обеспечение
          </Link>
          <Link href={"/"} className={styles.foot_link}>
            Инжиниринг
          </Link>
          <Link href={"/"} className={styles.foot_link}>
            Обучение персонала
          </Link>
        </div>
      </div>
    </footer>
  );
}
