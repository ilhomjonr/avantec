import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import { chevron_down } from "@/public/icon";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.boxs}>
        <div className={styles.top}>
          <div className={`${styles.top_inner} ${styles.box} `}>
            <div className={styles.left}>
              <Link className={styles.logo} href={"/"}>
                <Image
                  src="/media/logo.png"
                  alt="logo"
                  width={121}
                  height={31}
                />
              </Link>
              <div className={styles.contacts_left}>
                <div className={styles.email}>
                  <a
                    href={`mailto:     info@avantecgp.com`}
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
              </div>
            </div>
            <div className={`${styles.right} `}>
              <button className={styles.contactus}>Свяжется с нами</button>

              <nav className={styles.lngs}>
                <Link href={"/"}>Рус</Link>
                <Link href={"/"}>Eng</Link>
                <Link href={"/"}>Uzb</Link>
              </nav>
            </div>
          </div>
        </div>

        <div className={`${styles.bottom} ${styles.box}`}>
          <Link href={"/"} className={styles.nav_link}>
            Главная{" "}
          </Link>
          <Link href={"/"} className={styles.nav_link}>
            Каталог {chevron_down}{" "}
          </Link>
          <Link href={"/"} className={styles.nav_link}>
            О компании
          </Link>
          <Link href={"/"} className={styles.nav_link}>
            Новости
          </Link>
          <Link href={"/"} className={styles.nav_link}>
            Партнеры
          </Link>
          <Link href={"/"} className={styles.nav_link}>
            Контакт
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
