



"use client"; // Указание клиентского компонента

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/LanguageContext";
import styles from "@/app/styles/Header.module.scss";
import { pagesHom } from "../metadata/pagesHom";
import { useRouter } from "next/navigation";
import Logotip2 from "@/app/public/free7.webp";
import logoTelefon from "@/app/public/free_phone.webp";
import logoTelegram from "@/app/public/free_telegram.webp";
import logoViber from "@/app/public/free_viber.webp";
import logoEmail from "@/app/public/free_email.webp";
import logo3 from "@/app/public/angle.svg";
import FormConsultation from "./FormConsultation";

const translations = {
  ua: {
    header: {
      title: "Санітарна служба",
      subtitle: "DezGarant.com.ua",
      buttonText: "Безкоштовна консультація,<br /> розрахунок вартості.",
    },
  },
  ru: {
    header: {
      title: "Санитарная служба",
      subtitle: "DezGarant.com.ua",
      buttonText: "Бесплатная консультация,<br /> расчёт стоимости.",
    },
  },
};

const Header = React.memo(function Header() {
  const router = useRouter();
  const { currentLanguage, onLanguageToggle } = useLanguage();
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const { title, subtitle, buttonText } = translations[currentLanguage].header;

  useEffect(() => {
    document.title = pagesHom.title;
  }, [currentLanguage]);

  const toggleLanguageOptions = () => setShowLanguageOptions((prev) => !prev);

  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === "ua" ? "ru" : "ua";
    onLanguageToggle(newLanguage);
    setShowLanguageOptions(false);
  };

  const handleConsultationClick = () => setShowForm(true);
  const handleLogoClick = () => router.push("/");

  return (
    <header className={styles.headerContainer}>
      <meta name="description" content="Санитарная служба DezGarant" />
      <div className={styles.headerLogoContacts}>
        <div className={styles.divLogotip}>
          <div className={styles.linkHom} onClick={handleLogoClick}>
            <Image src={Logotip2} alt="Логотип" className={styles.logotip2} priority />
            <p className={`${styles.logoText} ${currentLanguage === "ru" ? styles.smallFont : ""}`}>
              {title} <br />
              <span className={styles.LogoTextSpan}>
                DezGarant.<span className={styles.comUaText}>com.ua</span>
              </span>
            </p>
          </div>
          <div className={styles.logotel}>
            <a href="tel:+380636369212" className={styles.aLogoTel}>
              <Image src={logoTelefon} alt="Телефон" className={styles.logoTelefon} />
              <p className={styles.header__phone_p}>(063) 636-92-12</p>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.headerConsultation}>
        <button className={styles.btnConsultation} onClick={handleConsultationClick}>
          <p
            className={styles.btnConsultationP}
            dangerouslySetInnerHTML={{ __html: buttonText }}
          />
        </button>

        <div className={styles.langContainer}>
          <button onClick={toggleLanguageOptions} className={styles.lang}>
            <span className={styles.spanLang}>{currentLanguage === "ua" ? "ua" : "ru"}</span>
            <Image src={logo3} alt="Стрелка" className={styles.langIcon} />
          </button>

          {showLanguageOptions && (
            <div className={styles.languageOptions}>
              <button onClick={handleLanguageChange} className={styles.lang2}>
                {currentLanguage === "ua" ? "ru" : "ua"}
              </button>
            </div>
          )}
        </div>

        <div className={styles.logoDiv3}>
          <a href="https://t.me/DezGarantUa" target="_blank" rel="noopener noreferrer">
            <Image src={logoTelegram} alt="Telegram" className={styles.logoTelegram} />
          </a>
          <a href="viber://chat?number=+380988560505">
            <Image src={logoViber} alt="Viber" className={styles.logoViber} />
          </a>
          <a href="mailto:dezgarantua@gmail.com">
            <Image src={logoEmail} alt="Email" className={styles.logoEmail} />
          </a>
        </div>
      </div>

      {showForm && <FormConsultation currentLanguage={currentLanguage} onClose={() => setShowForm(false)} />}
    </header>
  );
});

export default Header;
