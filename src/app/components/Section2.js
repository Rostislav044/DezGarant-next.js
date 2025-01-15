"use client"; 

import React, { useState, useEffect } from "react";
import Image from 'next/image'; 
import { useLanguage } from "@/app/LanguageContext"; 
import Img1 from '@/app/public/U.webp';
import Img2 from '@/app/public/o.webp';
import Img3 from '@/app/public/pexels.webp';
import Img4 from '@/app/public/c.webp';
import Img5 from '@/app/public/left.svg';
import Img6 from '@/app/public/right.svg';
import styles from '@/app/styles/Section2.module.scss'; // Импортируйте стили из CSS-модуля

const images = [Img1, Img2, Img3, Img4];

const translations = {
  sectionTitle: {
    ru: 'Как проводится обработка от вредителей:',
    ua: 'Як проводиться обробка від шкідників:'
  },
  sectionP: {
    ru: 'Перед обработкой необходимо подготовить помещение:',
    ua: 'Перед обробкою доведеться підготувати приміщення:'
  },
  sectionList: [
    {
      ru: 'убрать в другое место еду, посуду;',
      ua: 'прибрати до іншого місця їжу, посуд.'
    },
    {
      ru: 'если что-то переместить невозможно - накрыть плотным материалом и герметично это упаковать;',
      ua: 'якщо перемістити щось неможливо - накрити щільним матеріалом і герметично це запакувати;'
    },
    {
      ru: 'протереть все поверхности, вымыть пол, избавиться от мусора;',
      ua: 'протерти всі поверхні, вимити підлогу, позбутися сміття;'
    },
    {
      ru: 'плотно закрыть все окна;',
      ua: 'щільно закрити усі вікна;'
    },
    {
      ru: 'вынести все живые растения (токсины инсектицида могут быть для них смертельными);',
      ua: 'винести всі живі рослини (токсини інсектициду для них можуть бути смертельними);'
    },
    {
      ru: 'вывести из комнаты, где проводится обработка, домашних животных и людей.',
      ua: 'вивести з кімнати, де проводиться обробка, домашніх тварин та людей.'
    }
  ],
  finalP: {
    ru: 'По возможности следует выполнить небольшой ремонт: Закрыть или хотя бы заклеить щели — так, чтобы вредители не могли выбраться из помещения, которое обрабатывается.',
    ua: 'По можливості слід виконати невеликий ремонт: Закрити або хоча б заклеїти щілини - так, щоб шкідники не могли вибратися з приміщення, що обробляється.'
  }
};

const Section2 = () => {
    const { currentLanguage } = useLanguage(); 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <p className={styles.sectionTitle}>
        {translations.sectionTitle[currentLanguage]}
      </p>
      <p className={styles.sectionP}>
        {translations.sectionP[currentLanguage]}
      </p>
      <ul className={styles.sectionList}>
        {translations.sectionList.map((item, index) => (
          <li key={index}>{item[currentLanguage]}</li>
        ))}
      </ul>
      

<p className={styles.finalP}>
  <span className={styles.highlightText}>
    
    {translations.finalP[currentLanguage].split(':')[0]}:
    <br/>
  </span>
  <span className={styles.secondPartText}>
    {translations.finalP[currentLanguage].split(':')[1]}
  </span>
</p>



      <div className={styles.slider}>
        <button className={styles.prev} onClick={handlePrev}>
          <Image src={Img5} 
          alt="Left Arrow" 
          className={styles.arrowLogo} 
          width={24} height={24} />
        </button>
        <Image
          src={images[currentIndex]}
          alt={`Img${currentIndex + 1}`}
          className={styles.imgSection}
          // width={600}
          // height={400} 
        />
        <button className={styles.next} onClick={handleNext}>
          <Image src={Img6} 
          alt="Right Arrow" 
          className={styles.arrowLogo} 
          width={24} height={24} />
        </button>
      </div>
    </>
  );
};

export default Section2;

