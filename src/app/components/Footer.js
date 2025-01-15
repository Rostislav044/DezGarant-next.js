



import React from 'react';
import Image from 'next/image'; 
import Link from 'next/link';
import { useRouter } from "next/navigation";
import Img1 from '@/app/public/free7.webp';
import { useLanguage } from '@/app/LanguageContext'; 
import styles from '@/app/styles/Footer.module.scss';

const translations = {
    footerLogoTextSpan2: {
        ru: 'Нам доверяют с 2012 года!',
        ua: 'Нам довіряють з 2012 року!',
    },
    services: {
        dezinsektsiya: {
            ru: 'Услуги дезинсекции:',
            ua: 'Послуги з дезінсекції:',
        },
        dezinfektsiya: {
            ru: 'Услуги дезинфекции:',
            ua: 'Послуги з дезінфекції:',
        },
        deratizatsiya: {
            ru: 'Услуги дератизации:',
            ua: 'Послуги з дератизації:',
        },
        dezodoratsiya: {
            ru: 'Услуги по дезодорации:',
            ua: 'Послуги з дезодорації:',
        },
        fumigatsiya: {
            ru: 'Услуги фумигации:',
            ua: 'Послуги з фумігації:',
        },
    },
    serviceDetails: {
        dezinsektsiya: {
            ru: 'Уничтожение тараканов, постельных клопов, муравьев, блох, клещей, мух, моли, дезинсекция подвалов, уничтожение пауков, термитов, короедов.',
            ua: 'Знищення тарганів, клопів, мурах, бліх, кліщів, мух, молі, дезінсекція підвалів, знищення павуків, термітів, короїдів.',
        },
        dezinfektsiya: {
            ru: 'Борьба с грибком и плесенью, вирусами и микробами, обработка после туберкулеза, коронавируса, дезинфекция подвала.',
            ua: 'Боротьба з грибком і цвіллю, вірусами та мікробами, обробка після туберкульозу, коронавірусу, дезінфекція підвалу.',
        },
        deratizatsiya: {
            ru: 'Уничтожение мышей, крыс, кротов.',
            ua: 'Знищення мишей, щурів, кротів.',
        },
        dezodoratsiya: {
            ru: 'Удаление запахов в авто, табачного дыма, после пожара, трупного запаха, животных, после ремонта, сырости и плесени.',
            ua: 'Видалення запахів в авто, тютюнового диму, після пожежі, трупного запаху, тварин, після ремонту, вогкості та цвілі.',
        },
        fumigatsiya: {
            ru: 'Фумигация складов, зерна, зерносховищ, деревянных домов.',
            ua: 'Фумігація складських приміщень, зерна, зерносховищ, дерев’яних будинків.',
        },
    },
};

const Footer = () => {
    const { currentLanguage } = useLanguage();
    const router = useRouter(); // Используем useRouter для навигации
    const handleLogoClick = () => router.push("/"); // Обработчик для перехода на главную

    return (
        <div className={styles.footerDivContainer}>
            <div className={styles.footerTopRow}>
                <div className={styles.footerDivLogo} onClick={handleLogoClick}>
                    <Image src={Img1} alt="Logo" className={styles.img1} />
                    <div className={styles.footerLogoTextContainer}>
                        <p className={styles.footerLogoText1}>
                            {currentLanguage === 'ru' ? 'САНИТАРНАЯ СЛУЖБА' : 'САНІТАРНА СЛУЖБА'}
                        </p>
                        <p className={styles.footerLogoText2}> 
                            {"DezGarant."} 
                            <span className={styles.footerLogoTextCom}>com.ua</span>
                        </p>
                    </div>
                </div>
                <div className={styles.footerLogoDiv}>
                    <span className={styles.footerLogoTextSpan2}>
                        {translations.footerLogoTextSpan2[currentLanguage]}
                    </span>
                </div>
            </div>

            <div className={styles.footerDivServices}>
                {Object.keys(translations.services).map((serviceKey) => (
                    <p key={serviceKey} className={styles.footerDivServicesP}>
                        {serviceKey === 'dezinsektsiya' ? (
                            <Link href="/disinsection" className={styles.footerDivServicesP}>
                                {translations.services[serviceKey][currentLanguage]}
                            </Link>
                        ) : serviceKey === 'dezinfektsiya' ? (
                            <Link href="/disinfection" className={styles.footerDivServicesP}>
                                {translations.services[serviceKey][currentLanguage]}
                            </Link>
                        ) : serviceKey === 'deratizatsiya' ? (
                            <Link href="/deratization" className={styles.footerDivServicesP}>
                                {translations.services[serviceKey][currentLanguage]}
                            </Link>
                        ) : serviceKey === 'dezodoratsiya' ? (
                            <Link href="/dezodoratsiya" className={styles.footerDivServicesP}>
                                {translations.services[serviceKey][currentLanguage]}
                            </Link>
                        ) : serviceKey === 'fumigatsiya' ? (
                            <Link href="/fumigatsiya" className={styles.footerDivServicesP}>
                                {translations.services[serviceKey][currentLanguage]}
                            </Link>
                        ) : (
                            translations.services[serviceKey][currentLanguage]
                        )}

                        <br />
                        <span className={styles.footerDivServicesSpan}>
                            ({translations.serviceDetails[serviceKey][currentLanguage]})
                        </span>
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Footer;
