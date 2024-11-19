


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
    title: "Послуги з дезінсекції",
    description:
      "Наші професійні послуги з дезінсекції для боротьби з шкідливими комахами, що загрожують здоров'ю та комфорту проживання.",
    services: [
      { name: "Знищення тарганів —", description: "ефективно позбуваємось від них навіть у найскладніших умовах." },
      { name: "Клопів —", description: "застосовуємо сучасні методи обробки для захисту вашого дому." },
      { name: "Мурах —", description: "запобігаємо розмноженню мурах, забезпечуючи довготривалий ефект." },
      { name: "Бліх —", description: "пропонуємо безпечні для людини рішення для знищення бліх." },
      { name: "Кліщів —", description: "допомагаємо усунути кліщів у житлових і робочих приміщеннях." },
      { name: "Мух та молі —", description: "ефективно знищуємо літаючих комах, які переносять небезпечні інфекції." },
      { name: "Павуків, термітів та короїдів —", description: "захистіть своє майно від шкоди, яку завдають ці шкідники." },
    ],
    callToAction:
      "Захистіть свій дім та бізнес від небажаних сусідів — довіртеся професіоналам і позбудьтеся шкідників надовго!",
  },
  ru: {
    title: "Услуги по дезинсекции",
    description:
      "Наши профессиональные услуги по дезинсекции для борьбы с вредными насекомыми, которые угрожают здоровью и комфортному проживанию.",
    services: [
      { name: "Уничтожение тараканов —", description: "эффективно избавляемся от них даже в самых сложных условиях." },
      { name: "Клопов —", description: "применяем современные методы обработки для защиты вашего дома." },
      { name: "Муравьев —", description: "предотвращаем размножение муравьев, обеспечивая длительный эффект." },
      { name: "Блох —", description: "предлагаем безопасные для человека решения для уничтожения блох." },
      { name: "Клещей —", description: "помогаем устранить клещей в жилых и рабочих помещениях." },
      { name: "Мух и моли —", description: "эффективно уничтожаем летающих насекомых, которые переносят опасные инфекции." },
      { name: "Пауков, термитов и короедов —", description: "защитите свое имущество от вреда, наносимого этими вредителями." },
    ],
    callToAction:
      "Защитите свой дом и бизнес от нежелательных соседей — доверьтесь профессионалам и избавьтесь от вредителей надолго!",
  },
};

export default function DezinsektsiyaPage() {
  const { currentLanguage } = useLanguage();
  const { title, description, services, callToAction } = translations[currentLanguage];

  useEffect(() => {
    document.title = pagesHom.title;
  }, [currentLanguage]);

  return (
    <>
     <Head>
        
        <meta name="description" content="Санитарная служба DezGarant" />
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
