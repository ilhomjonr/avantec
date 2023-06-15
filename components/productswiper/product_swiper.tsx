"use client";
import Image from "next/image";
import styles from "./product_swiper.module.css";
import { chevron_right_blue } from "@/public/icon";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function ProductSwiper() {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  return (
    <section>
      <div className={`box ${styles.box}`}>
        <div className={styles.alls}>
          <Swiper
            slidesPerView={1}
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{ prevEl, nextEl }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className={styles.all}>
                <div className={styles.left}>
                  <div className={styles.img_cont}>
                    <Image
                      src="/media/product.png"
                      width={503}
                      height={328}
                      alt=""
                      className={styles.img}
                    />
                  </div>
                  <p className={styles.left_desc}>
                    iXpanel - i4.0 ready Высокопроизводительный токарный автомат
                    INDEX C100
                  </p>
                </div>
                <div className={styles.right}>
                  <p className={`section_title ${styles.title}`}>
                    развитие, применение новейших технологий и инновационных
                    решений
                  </p>
                  <div className={styles.right_desc}>
                    <p>
                      ООО "AVANTEC GP" предоставляет свои услуги по обработке
                      деталей с 2017 года. Грамотная организация
                      производственных процессов и применение инновационных
                      методов обработки позволяют существенно сократить рабочее
                      время сохраняя при этом стабильно высокое качество деталей
                    </p>
                    <p>
                      Современное оборудование, а также штат
                      высококвалифицированных сотрудников позволяют фирме
                      «Сергели Металл Конструкция» эффективно выполнять даже
                      самые сложные заказы, в установленные сроки и с
                      конкурентоспособной ценовой стратегией.
                    </p>
                  </div>
                  <div className={styles.btm}>
                    <button className="secondary_btn">Подробнее</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.all}>
                <div className={styles.left}>
                  <div className={styles.img_cont}>
                    <Image
                      src="/media/product.png"
                      width={503}
                      height={328}
                      alt=""
                      className={styles.img}
                    />
                  </div>
                  <p className={styles.left_desc}>
                    iXpanel - i4.0 ready Высокопроизводительный токарный автомат
                    INDEX C100
                  </p>
                </div>
                <div className={styles.right}>
                  <p className={`section_title ${styles.title}`}>
                    развитие, применение новейших технологий и инновационных
                    решений
                  </p>
                  <div className={styles.right_desc}>
                    <p>
                      ООО "AVANTEC GP" предоставляет свои услуги по обработке
                      деталей с 2017 года. Грамотная организация
                      производственных процессов и применение инновационных
                      методов обработки позволяют существенно сократить рабочее
                      время сохраняя при этом стабильно высокое качество деталей
                    </p>
                    <p>
                      Современное оборудование, а также штат
                      высококвалифицированных сотрудников позволяют фирме
                      «Сергели Металл Конструкция» эффективно выполнять даже
                      самые сложные заказы, в установленные сроки и с
                      конкурентоспособной ценовой стратегией.
                    </p>
                  </div>
                  <div className={styles.btm}>
                    <button className="secondary_btn">Подробнее</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.all}>
                <div className={styles.left}>
                  <div className={styles.img_cont}>
                    <Image
                      src="/media/product.png"
                      width={503}
                      height={328}
                      alt=""
                      className={styles.img}
                    />
                  </div>
                  <p className={styles.left_desc}>
                    iXpanel - i4.0 ready Высокопроизводительный токарный автомат
                    INDEX C100
                  </p>
                </div>
                <div className={styles.right}>
                  <p className={`section_title ${styles.title}`}>
                    развитие, применение новейших технологий и инновационных
                    решений
                  </p>
                  <div className={styles.right_desc}>
                    <p>
                      ООО "AVANTEC GP" предоставляет свои услуги по обработке
                      деталей с 2017 года. Грамотная организация
                      производственных процессов и применение инновационных
                      методов обработки позволяют существенно сократить рабочее
                      время сохраняя при этом стабильно высокое качество деталей
                    </p>
                    <p>
                      Современное оборудование, а также штат
                      высококвалифицированных сотрудников позволяют фирме
                      «Сергели Металл Конструкция» эффективно выполнять даже
                      самые сложные заказы, в установленные сроки и с
                      конкурентоспособной ценовой стратегией.
                    </p>
                  </div>
                  <div className={styles.btm}>
                    <button className="secondary_btn">Подробнее</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.all}>
                <div className={styles.left}>
                  <div className={styles.img_cont}>
                    <Image
                      src="/media/product.png"
                      width={503}
                      height={328}
                      alt=""
                      className={styles.img}
                    />
                  </div>
                  <p className={styles.left_desc}>
                    iXpanel - i4.0 ready Высокопроизводительный токарный автомат
                    INDEX C100
                  </p>
                </div>
                <div className={styles.right}>
                  <p className={`section_title ${styles.title}`}>
                    развитие, применение новейших технологий и инновационных
                    решений
                  </p>
                  <div className={styles.right_desc}>
                    <p>
                      ООО "AVANTEC GP" предоставляет свои услуги по обработке
                      деталей с 2017 года. Грамотная организация
                      производственных процессов и применение инновационных
                      методов обработки позволяют существенно сократить рабочее
                      время сохраняя при этом стабильно высокое качество деталей
                    </p>
                    <p>
                      Современное оборудование, а также штат
                      высококвалифицированных сотрудников позволяют фирме
                      «Сергели Металл Конструкция» эффективно выполнять даже
                      самые сложные заказы, в установленные сроки и с
                      конкурентоспособной ценовой стратегией.
                    </p>
                  </div>
                  <div className={styles.btm}>
                    <button className="secondary_btn">Подробнее</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.all}>
                <div className={styles.left}>
                  <div className={styles.img_cont}>
                    <Image
                      src="/media/product.png"
                      width={503}
                      height={328}
                      alt=""
                      className={styles.img}
                    />
                  </div>
                  <p className={styles.left_desc}>
                    iXpanel - i4.0 ready Высокопроизводительный токарный автомат
                    INDEX C100
                  </p>
                </div>
                <div className={styles.right}>
                  <p className={`section_title ${styles.title}`}>
                    развитие, применение новейших технологий и инновационных
                    решений
                  </p>
                  <div className={styles.right_desc}>
                    <p>
                      ООО "AVANTEC GP" предоставляет свои услуги по обработке
                      деталей с 2017 года. Грамотная организация
                      производственных процессов и применение инновационных
                      методов обработки позволяют существенно сократить рабочее
                      время сохраняя при этом стабильно высокое качество деталей
                    </p>
                    <p>
                      Современное оборудование, а также штат
                      высококвалифицированных сотрудников позволяют фирме
                      «Сергели Металл Конструкция» эффективно выполнять даже
                      самые сложные заказы, в установленные сроки и с
                      конкурентоспособной ценовой стратегией.
                    </p>
                  </div>
                  <div className={styles.btm}>
                    <button className="secondary_btn">Подробнее</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className={styles.navigation}>
            <button
              className={styles.left_btn}
              ref={(node: any) => setPrevEl(node)}
            >
              {chevron_right_blue}
            </button>
            <button
              className={styles.right_btn}
              ref={(node: any) => setNextEl(node)}
            >
              {chevron_right_blue}
            </button>
          </div>
        </div>
      </div>
      <div>;</div>
    </section>
  );
}
