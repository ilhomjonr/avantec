"use client";
import { email, map, phonesvg } from "@/public/icon";
import styles from "./contacts.module.css";
import { IMaskInput } from "react-imask";
import { useState } from "react";
import { Toast } from "../toast/toast";
import axios from "axios";
export default function Contacts() {
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
                  <div className={styles.info_svg}>{phonesvg}</div>
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
                <form className={styles.form_wrapper} onSubmit={handleRequest}>
                  <div className={styles.top_form}>
                    <input
                      type="text"
                      placeholder="Ваше имя"
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
                        placeholder=" 33 571 46 56"
                        required
                        value={number}
                        id="name"
                        onChange={(e) => setNumber(e.currentTarget.value)}
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
      <div className={styles.mobile}>
        <div className={``}>
          <div className={styles.container_mb}>
            <div className={styles.topper}>
              <p className={`section_title ${styles.title_top}`}>Контакты</p>
              <div className={styles.info_cont}>
                <div className={styles.info_svg}>{map}</div>
                <p className={styles.info_desc}>
                  Tashkent region, Mustakillik street 126, Almalyk City,
                  Republic of Uzbekistan
                </p>
              </div>

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
                <div className={styles.info_svg}>{phonesvg}</div>
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
            <div className={styles.form_top}>
              <p className={styles.form_title}>Форма для обратной связи</p>
              <div className={styles.form}>
                <form className={styles.form_wrapper} onSubmit={handleRequest}>
                  <div className={styles.top_form}>
                    <input
                      type="text"
                      placeholder="Ваше имя"
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
                        placeholder=" 33 571 46 56"
                        required
                        value={number}
                        id="name"
                        onChange={(e) => setNumber(e.currentTarget.value)}
                      />
                    </div>
                  </div>
                  <div>
                    {/* <ReCAPTCHA
                      sitekey={recaptchaPublicKey}
                      onChange={onReCAPTCHAChange}
                      theme="dark"
                    /> */}
                    <button
                      type="submit"
                      className={`${styles.submit} primary_btn`}
                    >
                      Отправить
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.map_mb}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5991.516320942118!2d69.3329809!3d41.3358719!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef48a8ed4d0e9%3A0x3772abeffc72e7b8!2sInha%20University%20in%20Tashkent!5e0!3m2!1sen!2s!4v1686739782096!5m2!1sen!2s"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Toast isSuccess={isSuccess} />
    </section>
  );
}

// import { useState, FormEvent } from "react";
// import axios from "axios";

// export default function Form() {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");

//   const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("/server/api.ts", {
//         name,
//         phone,
//       });

//       if (response.status === 200) {
//         alert("Form data sent successfully");
//         setName("");
//         setPhone("");
//       } else {
//         alert("Failed to send form data");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Failed to send form data");
//     }
//   };

//   return (
//     <div>
//       <h1>Contact Form</h1>
//       <form onSubmit={handleFormSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Phone:
//           <input
//             type="text"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }
// import axios from "axios";
// import { useContext, useState } from "react";
// import { IMaskInput } from "react-imask";
// import styles from "./contacts.module.css";

// export default function Contacts() {
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");
//   const channel =
//     "https://api.telegram.org/bot6034610821:AAEO4iFLAnblVYdIWutzVg_Mz6NhuBiqjow/sendMessage?parse_mode=HTML&chat_id=-1001900084002&";

//   async function postRequest(name: string, number: string) {
//     const data = {
//       first_name: name,
//       nbm: `+998 ${number}`,
//     };

//     const res = await axios.post(data);

//     return await res;
//   }

//   async function postTelegram(order: { product: { id: any } }) {
//     const res = await axios.get(
//       `${channel}text=https://derek.abba.uz/admin/products/${order.product.id}`
//     );
//     const data = await res.data;
//     return data;
//   }

//   const handleRequest = (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     // postTelegram(order).then(() => setIsSuccess(true));
//     postRequest(name, number)
//       .then((res) => {
//         if (res.status === 201) {
//           setIsSuccess(true);
//           setName("");
//           setNumber("");
//           // setIsModal(false);
//           setTimeout(() => {
//             setIsSuccess(false);
//           }, 2000);
//         }
//       })
//       .catch((e) => console.log(e));
//   };

//   return (
//     <>
//       <form className={styles.form} onSubmit={handleRequest}>
//         <div className={styles.inputs_container}>
//           <div className={styles.input_div}>
//             <label htmlFor="name">"name"</label>
//             <input
//               type="text"
//               id="name"
//               placeholder="name"
//               required
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className={styles.input_div}>
//             <label htmlFor="name">oh</label>
//             <div className={styles.withSpan}>
//               <span>+998</span>
//               <IMaskInput
//                 mask={"(00) 000 00 00"}
//                 id="name"
//                 placeholder="phone"
//                 required
//                 value={number}
//                 onChange={(e) => setNumber(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>
//         <div className={styles.post_buttons}>
//           <button type="submit" onClick={handleRequest}>
//             ggddddds
//           </button>
//           <a href="/" target={"_blank"} rel={"noreferrer"}></a>
//         </div>
//       </form>
//       {/* <Toast toastCase="post" isSuccess={isSuccess} /> */}
//     </>
//   );
// }
