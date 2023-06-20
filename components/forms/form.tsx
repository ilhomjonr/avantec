"use client";
import { Variants, motion } from "framer-motion";

import { arrow_right } from "@/public/icon";
import styles from "./form.module.css";
import { IMaskInput } from "react-imask";
import axios from "axios";
import { useState } from "react";
import { Toast } from "../toast/toast";
export default function Form() {
  const formright: Variants = {
    hide: {
      opacity: 0,
      x: 300,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const formleft: Variants = {
    hide: {
      opacity: 0,
      x: -300,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const channel =
    "https://api.telegram.org/bot6034610821:AAEO4iFLAnblVYdIWutzVg_Mz6NhuBiqjow/sendMessage?parse_mode=HTML&chat_id=-1001900084002&";

  async function postTelegram(name: string) {
    const res = await axios.get(`${channel}text=${name}+${`+998 ${number}`}`);
    const data = await res.data;
    return data;
  }
  const handleRequest = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    postTelegram(name).then(() => setIsSuccess(true));
    setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
    setName("");
    setNumber("");
  };
  //
  return (
    <section className={styles.form}>
      <div className={`box ${styles.box}`}>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={formleft}
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className={styles.left}>
            <p className={styles.title}>
              Если вам нужна информация <span>о нашей компании?</span>
            </p>
            <p className={styles.desc}>
              Заполните форму и мы обязательно свяжемся с вами
            </p>
          </div>
        </motion.div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={formright}
          className={styles.form_cont}
          viewport={{ once: true, amount: 0.8 }}
        >
          <div>
            <form className={styles.banner_form} onSubmit={handleRequest}>
              <div className={styles.banner_form_top}>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className={styles.name}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className={styles.formwrapper}>
                  <span>+998</span>
                  <IMaskInput
                    className={styles.number}
                    type="text"
                    mask={"(00) 000 00 00"}
                    unmask={true}
                    placeholder="33 393 39 39"
                    value={number}
                    required
                    id="name"
                    onChange={(e) => setNumber(e.currentTarget.value)}
                  />
                </div>
              </div>
              <button type="submit" className={styles.submit}>
                Отправить {arrow_right}
              </button>
            </form>
          </div>
        </motion.div>
        <Toast isSuccess={isSuccess} />
      </div>
    </section>
  );
}
