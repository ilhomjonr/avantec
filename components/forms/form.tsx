"use client";
import { arrow_right } from "@/public/icon";
import styles from "./form.module.css";
import { IMaskInput } from "react-imask";
export default function Form() {
  return (
    <section className={styles.form}>
      <div className={`box ${styles.box}`}>
        <div className={styles.left}>
          <p className={styles.title}>
            Если вам нужна информация <span>о нашей компании?</span>
          </p>
          <p className={styles.desc}>
            Заполните форму и мы обязательно свяжемся с вами
          </p>
        </div>
        <div>
          <form className={styles.banner_form}>
            <div className={styles.banner_form_top}>
              <input
                type="text"
                placeholder="Name"
                required
                className={styles.name}
              />
              <div className={styles.formwrapper}>
                <span>+998</span>
                <IMaskInput
                  className={styles.number}
                  type="text"
                  mask={"(00) 000 00 00"}
                  unmask={true}
                  placeholder="33 393 39 39"
                  value=""
                  required
                />
              </div>
            </div>
            <button type="submit" className={styles.submit}>
              Отправить {arrow_right}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
