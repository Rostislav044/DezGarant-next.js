


import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import logo1 from '@/app/public/Tick.svg';
import { useLanguage } from '@/app/LanguageContext';
import styles from '@/app/styles/BurgerMenu.module.scss';
import Link from 'next/link';

const translations = {
  disinsection: { ru: 'Дезинсекция', ua: 'Дезінсекція' },
  disinfection: { ru: 'Дезинфекция', ua: 'Дезінфекція' },
  deratization: { ru: 'Дератизация', ua: 'Дератизація' },
  dezodoration: { ru: 'Дезодорация', ua: 'Дезодорація' },
  fymigaz: { ru: 'Фумигация', ua: 'Фумігація' },
  pricing: { ru: 'Стоимость услуг', ua: 'Вартість послуг' },
  contact: { ru: 'Контакты', ua: 'Контакти' },
};

const getSubMenuClass = (menu) => {
  switch (menu) {
    case 'disinsection':
      return styles['sub-menu'];
    default:
      return styles['default-menu'];
  }
};

const BurgerMenu = () => {
  
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const { currentLanguage } = useLanguage();
  const menuRef = useRef(null);
  
  const [phoneClicked, setPhoneClicked] = useState(false);
  
   

  
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleMenuClick = (menu) => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
      setActiveSubMenu(null);
    }
  };


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  
  const handlePhoneClick = (e) => {
    e.preventDefault(); // Останавливаем стандартное поведение ссылки
    window.location.href = "tel:+380636369212";
  };
  

  const getSubMenuItems = (menu) => {
    const withLogo = (text) => (
      <div className={styles['sub-menu-item']}>
        <Image src={logo1} alt="logo" width={20} height={20} className={styles['logo-image']} />
        <span className={styles['text-span']}>{text}</span>
      </div>
    );

    

    switch (menu) {
      case 'disinsection':
        return [
          withLogo(currentLanguage === 'ua' ? 'Знищення тарганів.' : 'Уничтожение тараканов.'),
          withLogo(currentLanguage === 'ua' ? 'Знищення клопів.' : 'Уничтожение клопов.'),
          withLogo(currentLanguage === 'ua' ? 'Знищення мурах.' : 'Уничтожение муравьев.'),
          withLogo(currentLanguage === 'ua' ? 'Знищення бліх.' : 'Уничтожение блох.'),
          withLogo(currentLanguage === 'ua' ? 'Знищення кліщів.' : 'Уничтожение клещей.'),
          withLogo(currentLanguage === 'ua' ? 'Знищення мух.' : 'Уничтожение мух.'),
          withLogo(currentLanguage === 'ua' ? 'Знищення молі.' : 'Уничтожение моли.'),
          withLogo(currentLanguage === 'ua' ? 'Дезінсекція підвалів.' : 'Дезинсекция подвалов.'),
          withLogo(currentLanguage === 'ua' ? 'Знищення павуків.' : 'Уничтожение пауков.'),
          withLogo(currentLanguage === 'ua' ? 'Знищення термітів.' : 'Уничтожение термитов.'),
          withLogo(currentLanguage === 'ua' ? 'Знищення короїда.' : 'Уничтожение короедов.')
        ];
      case 'disinfection':
        return [
          withLogo(currentLanguage === 'ua' ? 'Боротьба з грибком та цвіллю.' : 'Борьба с грибком и плесенью.'),
          withLogo(currentLanguage === 'ua' ? 'Боротьба з вірусами та мікробами.' : 'Борьба с вирусами и микробами.'),
          withLogo(currentLanguage === 'ua' ? 'Обробка після туберкульозу.' : 'Обработка после туберкулеза.'),
          withLogo(currentLanguage === 'ua' ? 'Обробка від коронавірусу.' : 'Обработка от коронавируса.'),
          withLogo(currentLanguage === 'ua' ? 'Дезінфекція підвалу.' : 'Дезинфекция подвала.')
        ];
      case 'deratization':
        return [
          withLogo(currentLanguage === 'ua' ? 'Знищення мишей.' : 'Уничтожение мышей.'),
          withLogo(currentLanguage === 'ua' ? 'Знищення щурів.' : 'Уничтожение крыс.'),
          withLogo(currentLanguage === 'ua' ? 'Знищення кротів.' : 'Уничтожение кротов.')
        ];
      case 'dezodoration':
        return [
          withLogo(currentLanguage === 'ua' ? 'Запах в авто.' : 'Запах в автомобиле.'),
          withLogo(currentLanguage === 'ua' ? 'Запах тютюну, прокуренності.' : 'Запах табака, прокуренности.'),
          withLogo(currentLanguage === 'ua' ? 'Запах після пожежі.' : 'Запах после пожара.'),
          withLogo(currentLanguage === 'ua' ? 'Трупний запах.' : 'Трупный запах.'),
          withLogo(currentLanguage === 'ua' ? 'Запах тварин.' : 'Запах животных.'),
          withLogo(currentLanguage === 'ua' ? 'Запах після ремонту.' : 'Запах после ремонта.'),
          withLogo(currentLanguage === 'ua' ? 'Запах вогкості, грибка.' : 'Запах сырости, плесени.')
        ];
      case 'fymigaz':
        return [
          withLogo(currentLanguage === 'ua' ? 'Фумігація складов.' : 'Фумигация складов.'),
          withLogo(currentLanguage === 'ua' ? 'Фумігація зерна, зерносховищ.' : 'Фумигация зерна, зернохранилищ.'),
          withLogo(currentLanguage === 'ua' ? 'Фумігація дерев’яних будинків.' : 'Фумигация деревянных домов.')
        ];

        case 'pricing':
          return [


            
            currentLanguage  === 'ua'
              ? 'Позбавимо від шкідників!'
              : 'Избавим от вредителей!',
             

  
            <div 
            key="pricing-1" 
            className={styles['sub-menu-item']}>
              <Image src={logo1} alt="logo" width={20} height={20} />
              <span className={styles['text-span']}>
                {currentLanguage === 'ua'
                  ? ' Обробка квартир '
                  : 'Обработка  квартир '}
              </span>
              <span className={styles['red-text1']}>
                {currentLanguage === 'ua' ? 'від:' : 'от:'}
              </span>
              <span className={styles['red-text']}>1000 грн.</span>
            </div>,
            <div 
            key="pricing-2" 
            className={styles['sub-menu-item']}>
              <Image src={logo1} alt="logo" width={20} height={20}  />
              <span className={styles['text-span']}>
                {currentLanguage === 'ua'
                  ? 'Обробка для підприємств '
                  : 'Обработка для предприятий '}
              </span>
              <span className={styles['red-text1']}>
                {currentLanguage === 'ua' ? 'від:' : 'от:'}
              </span>
              <span className={styles['red-text']}>1500 грн.</span>
            </div>,
            <div 
            key="pricing-3" 
            className={styles['sub-menu-item']}>
              <Image src={logo1} alt="logo" width={20} height={20} />
              <span className={styles['text-span']}>
                {currentLanguage === 'ua'
                  ? 'Обробка земельних ділянок '
                  : 'Обработка земельных участков '}
              </span>
              <span className={styles['red-text1']}>
                {currentLanguage === 'ua' ? 'від:' : 'от:'}
              </span>
              <span className={styles['red-text']}>2000 грн.</span>
            </div>,
            
          ];




        
        case 'contact':
          return [
            <div 
            key="contact-1" 
            className={styles['sub-menu-item']}>
              <Image src={logo1} alt="logo" width={20} height={20} />
             

<Link 
  href="tel:+380636369212" 
  onClick={handlePhoneClick}
  className={styles['phone-link']}
>
  т.(063)636-92-12
</Link>


                 
            </div>,
            <div 
            key="contact-2" 
            className={styles['sub-menu-item']}>
              <Image src={logo1} alt="logo" width={20} height={20} />
              <span className={styles['text-span']}>
                {currentLanguage === 'ua'
                  ? 'Працюємо по Київу та області'
                  : 'Работаем по  Киеву и области'}
              </span>
            </div>,
            <div 
            key="contact-3" 
            className={styles['sub-menu-item']}>
              <Image src={logo1} alt="logo" width={20} height={20} />
              <span className={styles['text-span']}>
                {currentLanguage === 'ua'
                  ? 'Нам довіряють з 2012р.'
                  : 'Нам доверяют с 2012г.'}
              </span>
            </div>,
          ];
        
      default:
        return [];
    }
  };

  return (
    <div className={styles['burger-menu']} ref={menuRef}>
      <div className={styles['burger-icon']} onClick={toggleMenu}>
        <span className={styles['spanServices']}>{currentLanguage === 'ua' ? 'Наші послуги' : 'Наши услуги'}</span>
        <span className={styles['burger-symbol']}>☰</span>
      </div>
      <hr className={styles.hr}/>
      {isMenuOpen && (
        <ul className={styles['menu-items']}>

          {Object.keys(translations).map((key) => (
            <li key={key}  className={styles['menu-item']} onClick={() => handleMenuClick(key)}>
              <span className={styles['menu-link']}>
                {translations[key][currentLanguage]}
              </span>
              {activeSubMenu === key && (
                <div className= {getSubMenuClass(key)}
                // {styles['sub-menu ']}
                >
                  
                  <button
                onClick={() => setActiveSubMenu(null)}
                className={styles['close-button']}
              >
                ✖
              </button>
              
                  

                  {getSubMenuItems(key).map((item, index) => (
                 <div 
                   key={index} 
                    onClick={(e) => {
                      e.preventDefault();  // Предотвращает переход по ссылкам
                     e.stopPropagation(); // Останавливает всплытие события
                }}
                   className={styles['sub-menu-item']}
                        >
                       {item}
                           </div>
                           ))} 



                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BurgerMenu;





