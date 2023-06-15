"use client";
import { email, map, phone } from "@/public/icon";
import styles from "./contacts.module.css";
import { IMaskInput } from "react-imask";
export default function Contacts() {
  return (
    <section>
      <div className={styles.all}>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5991.516320942118!2d69.3329809!3d41.3358719!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef48a8ed4d0e9%3A0x3772abeffc72e7b8!2sInha%20University%20in%20Tashkent!5e0!3m2!1sen!2s!4v1686739782096!5m2!1sen!2s"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
        <div className={`box ${styles.box}`}>
          <div className={styles.container}>
            <div className={styles.topper}>
              <p className={`section_title ${styles.title_top}`}>Контакты</p>
              <div className={styles.info_cont}>
                <div className={styles.info_svg}>{map}</div>
                <p className={styles.info_desc}>
                  Tashkent region, Mustakillik street 126, Almalyk City,
                  Republic of Uzbekistan
                </p>
              </div>
              <div className={styles.btm_info}>
                <div className={styles.info_cont}>
                  <div className={styles.info_svg}>{email}</div>
                  <div className={styles.info_desc}>
                    <a
                      href={`mailto: info@avantecgp.com`}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      info@avantecgp.com
                    </a>
                  </div>
                </div>
                <div className={styles.info_cont}>
                  <div className={styles.info_svg}>{phone}</div>
                  <div className={styles.info_desc}>
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
            </div>
            <div className={styles.form_top}>
              <p className={styles.form_title}>Форма для обратной связи</p>
              <div className={styles.form}>
                <form action="sl" className={styles.form_wrapper}>
                  <div className={styles.top_form}>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className={styles.name}
                    />
                    <div className={styles.formwrapper}>
                      <span>+998</span>
                      <IMaskInput
                        className={styles.number}
                        type="text"
                        mask={"(00) 000 00 00"}
                        unmask={true}
                        placeholder=" 33 571 46 56"
                        value=""
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`${styles.submit} primary_btn`}
                  >
                    Отправить
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
