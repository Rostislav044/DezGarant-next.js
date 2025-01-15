

// export const metadata = {
//     title: 'Услуги дератизации - DezGarant',
//     description: 'Описание услуг дезинсекции для борьбы с насекомыми и вредителями.',
// };


// import Footer from "../components/Footer";
// import Header from "../components/Header";
// import styles from '@/app/styles/PageStyles.module.scss';
// export default function DeratizationPage() {
//     return (
//         <>
//         {/* <LanguageProvider> */}
//         <Header/>
//         <section className={styles.infoSection}>
//             <h1>Услуги по дератизации</h1>
//             <p>Описание услуг дератизации для борьбы с насекомыми и вредителями.</p>
//         </section>
//         <Footer/>
//         {/* </LanguageProvider> */}
//         </>
//     );
// }


"use client";

import React, { useEffect } from "react";
import { pagesHom } from "../metadata/pagesHom"; 
import { useLanguage } from "@/app/LanguageContext";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "@/app/styles/PageStyles.module.scss";

const translations = {
  ua: {
    title: "Послуги з дератизації",
    description:
      "Наші професійні послуги з дератизації для боротьби з гризунами, які загрожують вашому здоров'ю та безпеці майна.",
    services: [
      { name: "Знищення щурів —", description: "застосовуємо новітні методи для гарантованого захисту." },
      { name: "Мишей —", description: "проводимо обробку для запобігання розмноженню мишей у вашому приміщенні." },
      { name: "Польових гризунів —", description: "захищаємо сільськогосподарські та промислові зони." },
      { name: "Комплексна профілактика —", description: "встановлюємо профілактичні заходи для тривалого ефекту." },
      { name: "Безпека для дому та бізнесу —", description: "наші рішення безпечні та ефективні." },
    ],
    callToAction:
      "Захистіть свій дім та бізнес від гризунів — довіртеся професіоналам і позбудьтеся шкідників надовго!",
  },
  ru: {
    title: "Услуги по дератизации",
    description:
      "Наши профессиональные услуги по дератизации направлены на защиту от грызунов, угрожающих вашему здоровью и имуществу.",
    services: [
      { name: "Уничтожение крыс —", description: "используем современные методы для надежной защиты." },
      { name: "Мышей —", description: "проводим обработку для предотвращения размножения мышей в помещениях." },
      { name: "Полевых грызунов —", description: "защищаем сельскохозяйственные и промышленные зоны." },
      { name: "Комплексная профилактика —", description: "устанавливаем меры для длительного эффекта." },
      { name: "Безопасность для дома и бизнеса —", description: "наши решения безопасны и эффективны." },
    ],
    callToAction:
      "Защитите свой дом и бизнес от грызунов —  доверьтесь профессионалам и избавьтесь от вредителей надолго!",
  },
};

export default function DeratizationPage() {
  const { currentLanguage } = useLanguage();
  const { title, description, services, callToAction } = translations[currentLanguage];

  useEffect(() => {
    document.title = pagesHom.title;
  }, [currentLanguage]);

  return (
    <>
      <Head>
        <meta name="description" content="Санитарная служба DezGarant - Дератизация" />
      </Head>
      <Header />
      <section className={styles.infoSection}>
        <h1 className={styles.dezinsH1}>{title}</h1>
        <p className={styles.dezinsP}>{description}</p>
        <ul>
          {services.map((service, index) => (
            <li key={index} className={styles.dezinsLi}>
              <span className={styles.serviceName}>{service.name}</span>
              <span className={styles.dezinsSpan}>{service.description}</span>
            </li>
          ))}
        </ul>
        <p className={styles.callToAction}>{callToAction}</p>
      </section>
      <Footer />
    </>
  );
}

