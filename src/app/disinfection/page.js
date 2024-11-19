

// export const metadata = {
//     title: 'Услуги дезинфекции - DezGarant',
//     description: 'Описание услуг дезинфекции для борьбы с насекомыми и вредителями.',
// };
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import styles from '@/app/styles/PageStyles.module.scss';
// export default function DisinfectionPage() {
//     return (
//       <>
//       <Header/>
//       <section className={styles.infoSection}>
//         <h1>Дезинфекция</h1>
//         <p>Здесь можно добавить информацию о дезинфекции и услугах, которые вы предлагаете.</p>
//       </section>
//       <Footer/>
//       </>
//     );
//   }

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
    title: "Послуги з дезінфекції",
    description:
      "Забезпечте чистоту та здоров'я свого простору за допомогою наших професійних послуг з дезінфекції. Ми використовуємо найсучасніші методи для боротьби з небезпечними мікроорганізмами та підтримки безпечного середовища.",
    services: [
      { name: "Знищення грибка і плісняви —", description: "видаляємо плісняву навіть у важкодоступних місцях, попереджаючи її повторну появу." },
      { name: "Обробка від вірусів та мікробів —", description: "створюємо бар'єр від хвороботворних бактерій і вірусів, захищаючи вас та ваших близьких." },
      { name: "Дезінфекція після туберкульозу та інших інфекцій —", description: "надаємо спеціалізовані послуги для ефективного знищення збудників важких хвороб." },
      { name: "Профілактика коронавірусу —", description: "забезпечуємо комплексну дезінфекцію для зниження ризику поширення COVID-19." },
      { name: "Обробка підвалів та нежитлових приміщень —", description: "очищаємо від грибка та мікробів, роблячи приміщення безпечними для використання." },
    ],
    callToAction:
      "Захистіть свій дім та бізнес від небезпечних мікроорганізмів — довіртеся професіоналам для безпечного та здорового середовища!",
  },
  ru: {
    title: "Услуги по дезинфекции",
    description:
      "Обеспечьте чистоту и здоровье вашего пространства с помощью наших профессиональных услуг по дезинфекции. Мы используем современные методы для борьбы с опасными микроорганизмами и поддержания безопасной среды.",
    services: [
      { name: "Уничтожение грибка и плесени —", description: "устраняем плесень даже в труднодоступных местах, предотвращая её повторное появление." },
      { name: "Обработка от вирусов и микробов —", description: "создаём барьер от болезнетворных бактерий и вирусов, защищая вас и ваших близких." },
      { name: "Дезинфекция после туберкулёза и других инфекций —", description: "предоставляем специализированные услуги для эффективного уничтожения возбудителей тяжёлых болезней." },
      { name: "Профилактика коронавируса —", description: "проводим комплексную дезинфекцию для снижения риска распространения COVID-19." },
      { name: "Обработка подвалов и нежилых помещений —", description: "очищаем от грибка и микробов, делая помещения безопасными для использования." },
    ],
    callToAction:
      "Защитите свой дом и бизнес от опасных микроорганизмов — доверьтесь профессионалам для безопасной и здоровой среды!",
  },
};

export default function DisinfectionPage() {
  const { currentLanguage } = useLanguage();
  const { title, description, services, callToAction } = translations[currentLanguage];

  useEffect(() => {
    document.title = pagesHom.title;
  }, [currentLanguage]);

  return (
    <>
      <Head>
        <meta name="description" content="Санитарная служба DezGarant - Дезинфекция" />
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
