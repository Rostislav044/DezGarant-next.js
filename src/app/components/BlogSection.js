<<<<<<< HEAD

"use client";

import { useState, useEffect } from "react";


export default function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Загрузка статей с сервера
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('http://localhost:3001/posts/');
        // const response =await fetch ('https://dezgarant-next-js.onrender.com');
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const posts = await response.json();
        setPosts(posts);
      } catch (error) {
        console.error("Ошибка загрузки:", error.message);
      }
    }

    fetchPosts();
  }, []);

  // Обработчик отправки новой статьи
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3001/posts/', 
      // const res =await fetch ('https://dezgarant-next-js.onrender.com',
      {
        method: "POST",
        // method: 'GET',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });

      if (!res.ok) {
        throw new Error("Failed to add post");
      }

      const newPost = await res.json();
      setPosts([newPost, ...posts]);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Ошибка добавления:", error.message);
    }
  };

  return (
    <section style={{ padding: "20px", marginTop: "30px" }}>
      <h2>Блог</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ marginRight: "10px" }}
        />
        <textarea
          placeholder="Содержание"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ marginRight: "10px" }}
        ></textarea>
        <button type="submit">Добавить статью</button>
      </form>

      <div>
        {posts.map((post) => (
          <div key={post._id} style={{ marginBottom: "10px" }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>Создано: {new Date(post.createdAt).toLocaleString()}</small>
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
}


=======

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
>>>>>>> 5e2d7a66302ab81ad5e6b155e9a3b7352f209ff3
