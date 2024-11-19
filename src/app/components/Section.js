"use client";

import Image from "next/image";
import { useLanguage } from "@/app/LanguageContext"; 
import styles from "../styles/Section.module.scss";


import foto1 from "@/app/public/pexels.webp";
import foto2 from "@/app/public/covid.webp";
import foto4 from "../public/people.webp";

const translations = {
  ru: {
    sectionMainText: "Уничтожение тараканов, клопов и других насекомых!",
    slogan: "Избавим от вредителей  с помощью современных технологий.",
  },
  ua: {
    sectionMainText: "Знищення тарганів, клопів та інших комах!",
    slogan: "Позбавимо від шкідників  з використанням сучасних технологій.",
  },
};

export default function Section() {
  const { currentLanguage } = useLanguage(); // Получение текущего языка

  const { sectionMainText, slogan } = translations[currentLanguage];

  return (
    <main className={styles.main}>
      <section>
        <h3 className={styles.sectionMainText}>{sectionMainText}</h3>
        <p className={styles.slogan}>{slogan}</p>

        <div className={styles.sectionDivImg}>
          <Image src={foto1} alt="foto1" className={styles.sectionImg} priority />
          <Image src={foto2} alt="foto2" className={styles.sectionImg2}  />
          <Image src={foto4} alt="foto4" className={styles.sectionImg4}  />
        </div>
      </section>
    </main>
  );
}
