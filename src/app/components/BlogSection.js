
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/app/LanguageContext';
import styles from '@/app/styles/BlogSection.module.scss';
import blogImage from '@/app/public/BlogSection.webp';

const translations = {
    blogTitle: {
        ru: 'Наш блог',
        ua: 'Наш блог',
    },
    blogDescription: {
        ru: 'Узнайте больше о наших услугах и советах по поддержанию чистоты и гигиены.',
        ua: 'Дізнайтеся більше про наші послуги та поради щодо підтримання чистоти та гігієни.',
    },
    readMore: {
        ru: 'Читать дальше',
        ua: 'Читати далі',
    },
};

const BlogSection = () => {
    const { currentLanguage } = useLanguage();

    return (
        <section className={styles.blogSection}>
            <div className={styles.blogContainer}>
                <div className={styles.blogImageContainer}>
                    <Image src={blogImage} alt="Блог изображение" className={styles.blogImage} />
                </div>
                <div className={styles.blogContent}>
                    <h2 className={styles.blogTitle}>{translations.blogTitle[currentLanguage]}</h2>
                    <p className={styles.blogDescription}>{translations.blogDescription[currentLanguage]}</p>
                    <Link href="/blog" className={styles.readMoreLink}>
                        {translations.readMore[currentLanguage]}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
