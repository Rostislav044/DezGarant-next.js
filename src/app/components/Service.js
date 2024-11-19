"use client"; // Используется для активации Client Component в Next.js 13+

import Image from 'next/image'; 
import { useLanguage } from '@/app/LanguageContext'; // Пример использования контекста языка
import Img1 from '@/app/public/free1.webp';
import Img2 from '@/app/public/free2.webp';
import Img3 from '@/app/public/free3.webp';
import Img4 from '@/app/public/free4.webp';
import styles from '../styles/Service.module.scss'; // Импортируем CSS-модуль

const translations = {
  pService: {
    ru: 'Санитарная служба "DezGarant"',
    ua: 'Санітарна служба "DezGarant"',
  },
  serviceSpan: {
    ru: '- Гарантированное уничтожение тараканов, клопов и других насекомых!',
    ua: '- Гарантоване знищення тарганів, клопів та інших комах!',
  },
  imgText: [
    { ru: 'Надежность проверена временем!', ua: 'Надійність перевірена часом!' },
    { ru: 'Бесплатная консультация!', ua: 'Безкоштовна консультація!' },
    { ru: 'Безопасные препараты!', ua: 'Безпечні препарати!' },
    { ru: 'Работаем без выходных!', ua: 'Працюємо без вихідних!' },
  ],
};

const Service = () => {
  const { currentLanguage } = useLanguage(); // Получаем текущий язык из контекста

  return (
    < >
      <p className={styles.pService}>
        {translations.pService[currentLanguage]} <br />
        <span className={styles.serviceSpan}>
          {translations.serviceSpan[currentLanguage]}
        </span>
      </p>

      <div className={styles.serviceImgGrid}>
        {translations.imgText.map((text, index) => (
          <div key={index} className={styles.gridItem}>
            <Image 
              src={
                index === 0 ? Img3  : index === 1 ? Img2 : index === 2 ? Img1 : Img4
              }
              alt={`img${index + 1}`}
              className={styles.gridPhoto}
              width={100}
              height={100}
              priority
            />
            <p className={styles.p}>{text[currentLanguage]}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;
