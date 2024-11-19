

// export const metadata = {
//     title: 'Услуги дезинфекции - DezGarant',
//     description: 'Описание услуг дезинфекции для борьбы с насекомыми и вредителями.',
// };
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import styles from "@/app/styles/PageStyles.module.scss";
// export default function DezodorationPage() {
//     return (
//       <>
// <Header/>
//       <section className={styles.infoSection}>
//         <h1>Дезодорація</h1>
//         <p>Здесь можно добавить информацию о Дезодораціі и услугах, которые вы предлагаете.</p>
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
    title: "Послуги з дезодорації",
    description:
      "Наші послуги з дезодорації допоможуть позбутися навіть найбільш стійких запахів, забезпечуючи чисте і свіже повітря в будь-яких приміщеннях та транспортних засобах.",
    services: [
      { name: "Видалення запаху в салоні авто —", description: "усуваємо запахи їжі, тварин та тютюну, повертаючи свіжість салону." },
      { name: "Боротьба з тютюновим димом —", description: "повністю усуваємо запах сигарет та продуктів горіння." },
      { name: "Видалення запаху після пожежі —", description: "ліквідуємо стійкі аромати гару та кіптяви для безпечного середовища." },
      { name: "Усунення трупного запаху —", description: "проводимо ретельну дезодорацію, усуваючи всі сліди неприємного запаху." },
      { name: "Видалення запахів тварин —", description: "очищаємо приміщення від слідів та запахів, залишених домашніми та дикими тваринами." },
      { name: "Свіжість після ремонту —", description: "нейтралізуємо хімічні запахи після ремонту та фарбування." },
      { name: "Боротьба з вологістю та пліснявою —", description: "усуваємо запахи затхлості та попереджаємо їх повторну появу." },
    ],
    callToAction:
      "Довірте свою безпеку професіоналам — повернемо чистоту і свіжість вашому простору надовго!",
  },
  ru: {
    title: "Услуги по дезодорации",
    description:
      "Наши услуги по дезодорации помогут устранить даже самые стойкие запахи, обеспечивая свежий и чистый воздух в любых помещениях и транспортных средствах.",
    services: [
      { name: "Удаление запаха в салоне авто —", description: "устраняем запахи еды, животных и табака, возвращая свежесть салону." },
      { name: "Борьба с табачным дымом —", description: "полностью избавляем помещение от запаха сигарет и продуктов горения." },
      { name: "Удаление запаха после пожара —", description: "убираем стойкие ароматы гари и копоти для безопасной атмосферы." },
      { name: "Устранение трупного запаха —", description: "проводим тщательную дезодорацию, убирая все следы неприятного запаха." },
      { name: "Удаление запахов животных —", description: "очищаем помещения от следов и запахов, оставленных домашними и дикими животными." },
      { name: "Свежесть после ремонта —", description: "нейтрализуем химические запахи после ремонта и покраски." },
      { name: "Борьба с сыростью и плесенью —", description: "устраняем запахи затхлости и предотвращаем повторное их появление." },
    ],
    callToAction:
      "Доверьте свою безопасность профессионалам — вернем чистоту и свежесть вашему пространству надолго!",
  },
};

export default function DezodorationPage() {
  const { currentLanguage } = useLanguage();
  const { title, description, services, callToAction } = translations[currentLanguage];

  useEffect(() => {
    document.title = pagesHom.title;
  }, [currentLanguage]);

  return (
    <>
      <Head>
        <meta name="description" content="Санитарная служба DezGarant - Дезодорация" />
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
