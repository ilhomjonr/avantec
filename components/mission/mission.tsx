import styles from "./mission.module.css";
export default function Mission() {
  return (
    <section>
      <div className={`box`}>
        <div className={styles.missions}>
          <div className={styles.left}>
            <div className={styles.mission_topper}>
              <p className="section_title">Цель проекта​</p>
              <p className={`section_desc ${styles.topper_desc}`}>
                Производство металлообрабатывающих центров, закрытие
                потребностей промышленности Республики Узбекистан, а также
                экспорт продукции СП в страны СНГ
              </p>
            </div>
            <div className={styles.descs}>
              <div className={styles.desc}>
                <p className={styles.year}>2023 г.​ </p>
                <p className={`${styles.year_desc} section_desc`}>
                  Организация сборочного производства и​ сервисного центра на
                  базе АГМК. ​ Оснащение режущим инструментом, разработка и
                  внедрение технологий.​ Обучение персонала заказчика.​ Уровень
                  локализации 5-10 %​
                </p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.mission_topper}>
              <p className="section_title">План осуществления проекта​​</p>
              <p className={`section_desc ${styles.topper_desc}`}>
                Проект будет реализован в три этапа - в 2023 году планируется
                производство 6 ед., обрабатывающих центров, с дальнейшим выходом
                на полную производственную мощность (34 шт.) в 2027 году.
              </p>
            </div>
            <div className={styles.descs}>
              <div className={styles.desc}>
                <p className={styles.year}>2024 г.​ </p>
                <p className={`${styles.year_desc} section_desc`}>
                  Подготовка и изготовление зажимной оснастки, накладных
                  планшайб, стружкоуборочных конвейеров и станций СОЖ. Уровень
                  локализации 15-25 %
                </p>
              </div>
              <div className={styles.desc}>
                <p className={styles.year}>2025 г.​ </p>
                <p className={`${styles.year_desc} section_desc`}>
                  Подготовка и производство литейных и сварных деталей с
                  механической обработкой.​ Уровень локализации 25-35 %
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
