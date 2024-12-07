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
    title: "Вартість послуг",
    description:
      "Забезпечте безпеку та здоров'я вашого простору за допомогою наших професійних послуг . Ми використовуємо передові методи для боротьби з шкідниками та забезпечення безпечного середовища.",
    services: [
      { name: "Фумігація складських приміщень —", description: "ефективно усуваємо шкідників, що можуть загрожувати збереженню товарів у складах." },
      { name: "Фумігація зерна —", description: "запобігаємо поширенню шкідливих організмів у зерні, що зберігається." },
      { name: "Фумігація зерносховищ —", description: "захищаємо ваші зерносховища від шкідників та мікроорганізмів." },
      { name: "Фумігація дерев'яних будинків —", description: "знищуємо шкідників, які можуть пошкодити дерев'яні конструкції." },
    ],
    callToAction:
      "Захистіть свій дім та бізнес від шкідників — довіртеся професіоналам для безпечного та здорового середовища!",
  },
  ru: {
    title: "Стоимость услуг",
    description:
      "Обеспечьте безопасность и здоровье вашего пространства с помощью наших профессиональных услуг. Мы используем передовые методы для борьбы с вредителями и обеспечения безопасной среды.",
    services: [
      { name: "Фумигация складских помещений —", description: "эффективно уничтожаем вредителей, угрожающих сохранности товаров на складах." },
      { name: "Фумигация зерна —", description: "предотвращаем распространение вредных организмов в хранимом зерне." },
      { name: "Фумигация зернохранилищ —", description: "защищаем ваши зернохранилища от вредителей и микроорганизмов." },
      { name: "Фумигация деревянных домов —", description: "уничтожаем вредителей, которые могут повредить деревянные конструкции." },
    ],
    callToAction:
      "Защитите свой дом и бизнес от вредителей — доверьтесь профессионалам для безопасной и здоровой среды!",
  },
};

export default function FumigatsiyaPage() {
  const { currentLanguage } = useLanguage();
  const { title, description, services, callToAction } = translations[currentLanguage];

  useEffect(() => {
    document.title = pagesHom.title;
  }, [currentLanguage]);

  return (
    <>
      <Head>
        <meta name="description" content="Санитарная служба DezGarant - Вартість послуг" />
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
