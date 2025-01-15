// app/components/Section3.js
'use client'; // Указываем, что это клиентский компонент

import React from 'react';
import { useLanguage } from '@/app/LanguageContext'; 
import styles from '@/app/styles/Section3.module.scss'; // Импортируем SCSS как модуль

const translations = {
  sectionTitle1: {
    ru: 'Методы обработки:',
    ua: 'Методи обробки:',
  },
  sectionTitle2: {
    ru: 'Холодный туман:',
    ua: 'Холодний туман:',
  },
  sectionText1: {
    ru: `В своей работе мы используем несколько методов, но самым эффективным является применение 
    специальных генераторов, которые превращают рабочий раствор в мельчайшие капли. Этот метод 
    позволяет обработать даже самые труднодоступные места и обеспечить равномерное покрытие поверхности.`,
    ua: `У своїй роботі ми використовуємо кілька методів, але найефективнішим є застосування 
    спеціальних генераторів, які перетворюють робочий розчин на найдрібніші краплі. Цей метод 
    дозволяє обробити навіть найважкодоступні місця та забезпечити рівномірне покриття поверхні.`,
  },
  sectionTitle3: {
    ru: 'Горячий туман:',
    ua: 'Гарячий туман:',
  },
  sectionText2: {
    ru: `Принцип работы с горячим туманом схож, но благодаря подогреву частицы средства становятся 
    еще меньше и проникают глубже в щели и трещины. Этот метод эффективен для борьбы с вредителями 
    в складских и промышленных помещениях.`,
    ua: `Принцип роботи з гарячим туманом схожий, але завдяки підігріву частки засобу стають ще меншими 
    і проникають глибше у щілини та тріщини. Цей метод ефективний для боротьби зі шкідниками на складах 
    та у промислових приміщеннях.`,
  },
  sectionTitle4: {
    ru: 'Барьерная защита:',
    ua: 'Бар\'єрний захист:',
  },
  sectionText3: {
    ru: `Дополнительная гарантия обработки от вредителей. Обычно используется в паре с одним из методов, 
    перечисленных выше. Создается невидимый защитный слой, который предотвращает повторное появление вредителей.`,
    ua: `Додаткова гарантія обробки від шкідників. Зазвичай використовується в парі з одним із методів, 
    перерахованих вище. Створюється невидимий захисний шар, який запобігає повторній появі шкідників.`,
  },
};

const Section3 = () => {
  const { currentLanguage } = useLanguage(); // Получаем текущий язык

  return (
    <>
      <p className={styles.Section2P1}>
        {translations.sectionTitle1[currentLanguage]}
        
      </p>
      <p className={styles.Section2P2}> 
      
        {translations.sectionTitle2[currentLanguage]}
        <br /> 
        
        <span className={styles.Section2PSpan}>
          {translations.sectionText1[currentLanguage]}
        </span>
      </p>
      <p className={styles.Section2P2}>
         
        {translations.sectionTitle3[currentLanguage]}
        <br />
        <span className={styles.Section2PSpan}>
          {translations.sectionText2[currentLanguage]}
        </span>
      </p>
      <p className={styles.Section2P2}>
        {translations.sectionTitle4[currentLanguage]}
        <br />
        <span className={styles.Section2PSpan}>
          {translations.sectionText3[currentLanguage]}
        </span>
      </p>
    </>
  );
};

export default Section3;
