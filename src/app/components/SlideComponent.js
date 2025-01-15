"use client"; 
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; 
import { useLanguage } from '@/app/LanguageContext'; 
import logo5 from '@/app/public/left.svg'; // Путь к изображению стрелки влево
import logo6 from '@/app/public/right.svg'; // Путь к изображению стрелки вправо
import logo1 from '@/app/public/3d.webp'; // Путь к изображению 1
import logo2 from '@/app/public/supermarket.webp'; // Путь к изображению 2
import slide3 from '@/app/public/red.webp'; // Путь к изображению 3
import slide4 from '@/app/public/shop.webp'; // Путь к изображению 4
import styles from '@/app/styles/SlideComponent.module.scss'; // Импортируем стили

const images = [
  { src: logo1, alt: 'Logo1', className: styles.logo1 },
  { src: logo2, alt: 'Logo2', className: styles.logo2 },
  { src: slide3, alt: 'slide3', className: styles.slide3 },
  { src: slide4, alt: 'slide4', className: styles.slide4 },
];

const translations = {
  slideTextH: 
  {
    ru: "Проводим обработку во всех типах помещений",
    ua: "Проводимо обробку у всіх типах приміщень",
  }
};

const SlideComponent = () => {
    const { currentLanguage } = useLanguage();
    

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (

<div className={styles.slideContainer} >
  <h1 className={styles.slideTextH}>
    {translations.slideTextH[currentLanguage]}
  </h1>

  <div className={styles.slider}>
    <button onClick={goToPrevious} className={`${styles.arrow} ${styles.leftArrow}`}>
      <Image 
        src={logo5} 
        alt="Left Arrow" 
        className={styles.arrowLogo} 
        width={20} 
        height={20} 
      />
    </button>

    <Image 
      src={images[currentIndex].src} 
      alt={images[currentIndex].alt} 
      className={styles.slideImg} 
      // priority 
    />

    <button onClick={goToNext} className={`${styles.arrow} ${styles.rightArrow}`}>
      <Image 
        src={logo6} 
        alt="Right Arrow" 
        className={styles.arrowLogo} 
        width={20} 
        height={20} 
        
      />
    </button>
  </div>
</div>


  );
};

export default SlideComponent;


