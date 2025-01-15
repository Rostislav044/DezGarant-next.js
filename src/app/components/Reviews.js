


import React, { useState } from 'react';
import { useLanguage } from '@/app/LanguageContext';
import styles from '@/app/styles/Reviews.module.scss';

const translations = {
  ua: {
    title: 'Відгуки наших клієнтів',
    buttonText: 'Залишити відгук',
    seeMoreText: 'Показати більше відгуків',
    seeLessText: 'Згорнути відгуки',
    cancelButtonText: 'Не залишати відгук',
    placeholders: {
      name: "Ваше ім'я",
      city: 'Ваше місто',
      text: 'Ваш відгук',
    },
    errors: {
      name: "Будь ласка, введіть ваше ім'я!",
      city: 'Будь ласка, введіть ваше місто!',
      text: 'Будь ласка, введіть ваш відгук!',
    },
    successMessage: 'Дякуємо! Ваш відгук надіслано.',
  },
  ru: {
    title: 'Отзывы наших клиентов',
    buttonText: 'Оставить отзыв',
    seeMoreText: 'Показать больше отзывов',
    seeLessText: 'Свернуть отзывы',
    cancelButtonText: 'Не оставлять отзыв',
    placeholders: {
      name: 'Ваше имя',
      city: 'Ваш город',
      text: 'Ваш отзыв',
    },
    errors: {
      name: 'Пожалуйста, введите ваше имя!',
      city: 'Пожалуйста, введите ваш город!',
      text: 'Пожалуйста, введите ваш отзыв!',
    },
    successMessage: 'Спасибо! Ваш отзыв отправлен.',
  },
};

const Reviews = () => {
  const { currentLanguage } = useLanguage();

  const initialReviews = [
    { id: 1, name: 'Алексей', city: 'Киев', text: 'Отличная работа по дезинфекции!', date: '12 серпня 2023', lang: 'ru' },
    { id: 2, name: 'Марія', city: 'Одеса', text: 'Дуже професійно!', date: '25 грудня 2023', lang: 'ua' },
    { id: 3, name: 'Ольга', city: 'Житомир', text: 'Дякуємо за якісну послугу!', date: '10 червня 2024', lang: 'ua' },
    { id: 4, name: 'Иван', city: 'Харьков', text: 'Все на высшем уровне!', date: '14 липня 2023', lang: 'ru' },
    { id: 5, name: 'Сергей', city: 'Харьков', text: 'Очень благодарны за помощь!', date: '5 квітня 2023', lang: 'ru' },
    { id: 6, name: 'Наталя', city: 'Полтава', text: 'Рекомендую!', date: '10 серпня 2023', lang: 'ua' },
     { id: 7, name: 'Виктория', city: 'Запоріжжя', text: 'Все супер!', date: '22 липня 2024', lang: 'ua' },
  ];

  const [reviews, setReviews] = useState(initialReviews);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', city: '', text: '' });
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const visibleReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, city, text } = newReview;
    const newErrors = {};

    if (!name) newErrors.name = translations[currentLanguage].errors.name;
    if (!city) newErrors.city = translations[currentLanguage].errors.city;
    if (!text) newErrors.text = translations[currentLanguage].errors.text;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newReviewData = {
      id: reviews.length + 1,
      name: newReview.name,
      city: newReview.city,
      text: newReview.text,
      date: new Date().toLocaleDateString(),
      lang: currentLanguage,
    };

    setReviews((prev) => [newReviewData, ...prev]);
    setNewReview({ name: '', city: '', text: '' });
    setShowForm(false);
    setShowAlert(true); // Показать алерт

    // Скрыть алерт через 3 секунды
    setTimeout(() => setShowAlert(false), 5000); 
  };

  return (
    <div className={styles.reviewsContainer}>
      <h2 className={styles.h2}>{translations[currentLanguage].title}</h2>

      {showAlert && (
        <div className={`${styles.alert} ${styles.successAlert}`}>
          {translations[currentLanguage].successMessage}
        </div>
      )}

      <ul className={styles.reviewsList}>
        {visibleReviews.map((review) => (
          <li key={review.id} className={styles.reviewItem}>
            <div className={styles.reviewHeader}>
              <strong>{review.name}</strong> ({review.city}) —{' '}
              <span className={styles.reviewDate}>{review.date}</span>
            </div>
            <p>{review.text}</p>
          </li>
        ))}
      </ul>

      {reviews.length > 3 && (
        <button
          className={styles.toggleReviewsBtn}
          onClick={() => setShowAllReviews((prev) => !prev)}
        >
          {showAllReviews
            ? translations[currentLanguage].seeLessText
            : translations[currentLanguage].seeMoreText}
        </button>
      )}
<br/>
      {showForm ? (
        <form className={styles.reviewForm} onSubmit={handleFormSubmit}>
          <input className={styles.input}
            type="text"
            name="name"
            placeholder={translations[currentLanguage].placeholders.name}
            value={newReview.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className={styles.errorText}>{errors.name}</p>}
          <input className={styles.input}
            type="text"
            name="city"
            placeholder={translations[currentLanguage].placeholders.city}
            value={newReview.city}
            onChange={handleInputChange}
          />
          {errors.city && <p className={styles.errorText}>{errors.city}</p>}
          <textarea className={styles.textarea}
            name="text"
            placeholder={translations[currentLanguage].placeholders.text}
            value={newReview.text}
            onChange={handleInputChange}
          />
          {errors.text && <p className={styles.errorText}>{errors.text}</p>}
          <div className={styles.formButtons}>
            <button className={styles.bntReview} type="submit">{translations[currentLanguage].buttonText}</button>
           
            <button className={styles.bntReviewStop} type="button" onClick={() => setShowForm(false)}>
              {translations[currentLanguage].cancelButtonText}
              
            </button>
            
          </div>
          
        </form>
        
      ) : (
        
        <button className={styles.leaveReviewBtn} onClick={() => setShowForm(true)}>
          {translations[currentLanguage].buttonText}
        </button>
        
      )}
    </div>
  );
};

export default Reviews;

