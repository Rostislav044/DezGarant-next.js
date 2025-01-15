import React, { useState, useEffect } from 'react';
import  styles from '@/app/styles/FormConsultation.module.scss';

const translations = {
  ua: {
    form: {
      title: "Заповніть форму для консультації",
      problemDescription: "Опишіть вашу проблему",
      area: "Площа (м²)",
      phone: "Телефон",
      name: "Ім'я",
      city: "Місто",
      submitButton: "Відправити",
      error: {
        problemDescription: 'Заповніть це поле !',
        area: 'Введіть коректну площу ! (допускаються лише цифри)',
        phone: 'Введіть коректний номер телефону ! ',
        name: 'Вкажіть ім\'я !',
        city: 'Вкажіть місто !',
      },
      successMessage: 'Дякуємо! Ми скоро з Вами зв\'яжемося!'
    }
  },
  ru: {
    form: {
      title: "Заполните форму для консультации",
      problemDescription: "Опишите вашу проблему",
      area: "Площадь (м²)",
      phone: "Телефон",
      name: "Имя",
      city: "Город",
      submitButton: "Отправить",
      error: {
        problemDescription: 'Заполните это поле',
        area: 'Введите корректную площадь (разрешены только цифры)',
        phone: 'Введите корректный номер телефона ',
        name: 'Укажите имя',
        city: 'Укажите город',
      },
      successMessage: 'Спасибо! Мы скоро с Вами свяжемся!'
    }
  }
};

const FormConsultation = ({ currentLanguage, onClose }) => {
  const [formData, setFormData] = useState({
    problemDescription: '',
    area: '',
    phone: '+380',
    name: '',
    city: ''
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
        onClose();
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [showModal, onClose]);

  const validate = () => {
    let formErrors = {};
    const areaRegex = /^[0-9]+$/;
    const phoneRegex = /^\+380\d{9}$/;

    if (!formData.problemDescription) formErrors.problemDescription = translations[currentLanguage].form.error.problemDescription;
    if (!formData.area || !areaRegex.test(formData.area)) formErrors.area = translations[currentLanguage].form.error.area;
    if (!formData.phone || !phoneRegex.test(formData.phone)) formErrors.phone = translations[currentLanguage].form.error.phone;
    if (!formData.name) formErrors.name = translations[currentLanguage].form.error.name;
    if (!formData.city) formErrors.city = translations[currentLanguage].form.error.city;

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendToTelegram = async () => {
    const token = '7577884685:AAHyrz2lYfXNUzwBvqLP1NxoJZ0YmejFzOE';
    const chatId = '1209666268';
    const message = `Новая заявка на консультацию:\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nПроблема: ${formData.problemDescription}\nПлощадь: ${formData.area} м²\nГород: ${formData.city}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });
    } catch (error) {
      console.error('Ошибка отправки данных в Telegram:', error);
      alert('Не удалось отправить данные в Telegram.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      await sendToTelegram();
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    onClose();
  };

  const { title, problemDescription, area, phone, name, city, submitButton } = translations[currentLanguage].form;

  return (
    <div className={styles.formContainer}>
      <form className={styles.consultationForm } onSubmit={handleSubmit} noValidate>
        <button type="button" className={styles.closeBtn} onClick={onClose}>×</button>
        <h2>{title}</h2>

        <label  className ={styles.label}htmlFor="problemDescription">{problemDescription}</label>
        <textarea className={styles.textarea}
          id="problemDescription"
          name="problemDescription"
          rows="4"
          value={formData.problemDescription}
          onChange={handleChange}
        />
        {errors.problemDescription && <span className={styles.error}>{errors.problemDescription}</span>}

        <label className ={styles.label} htmlFor="area">{area}</label>
        <input className={`${styles.input} ${styles.inputFocus}`}
          id="area"
          name="area"
          type="text"
          value={formData.area}
          onChange={handleChange}
          pattern="\d*"
          title="Площадь (м²): только цифры"
        />
        {errors.area && <span className={styles.error}>{errors.area}</span>}

        <label className ={styles.label} htmlFor="phone">{phone}</label>
        <input className={`${styles.input} ${styles.inputFocus}`}
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          pattern="\+380\d{9}"
          title="Формат номера: +380XXXXXXXXX"
        />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}

        <label className ={styles.label} htmlFor="name">{name}</label>
        <input className={`${styles.input} ${styles.inputFocus}`}
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}

        <label className ={styles.label} htmlFor="city">{city}</label>
        <input className={`${styles.input} ${styles.inputFocus}`}
          id="city"
          name="city"
          type="text"
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <span className={styles.error}>{errors.city}</span>}

        <button type="submit" className={styles.submitBtn}>{submitButton}</button>
      </form>

      {showModal && (
        <div className={`${styles.modal} ${styles.active}`}>
          <div className={styles.modalContent}>
            <p>{translations[currentLanguage].form.successMessage}</p>
            <button className={styles.modalButton} onClick={handleCloseModal}>
              ОК
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormConsultation;


