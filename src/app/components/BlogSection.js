// "use client";
// import { useState, useEffect } from 'react';

// export default function BlogSection() {
//   const [posts, setPosts] = useState([]);
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');

//   // Получение статей с сервера
//   useEffect(() => {
//     fetch('/api/posts')
//       .then((res) => res.json())
//       .then((data) => setPosts(data))
//       .catch((err) => console.error('Ошибка загрузки:', err));
//   }, []);
//   useEffect(()=>{
//     async function fetchPosts() {
//     try {
//       const response = await fetch('http://localhost:3001/posts/');
//       if (!response.ok) {
//         throw new Error('Failed to fetch posts');
//       }
//       const posts = await response.json();
//       console.log(posts);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
//   fetchPosts();
//   },[])
//   // Обработчик отправки новой статьи
//   const handleSubmit = async (e) => {
//     async function fetchPosts() {
//       try {
//         const response = await fetch('http://localhost:3001/posts/');
//         if (!response.ok) {
//           throw new Error('Failed to fetch posts');
//         }
//         const posts = await response.json();
//         console.log(posts);
//       } catch (error) {
//         console.error(error.message);
//       }
//     }
//     fetchPosts();
    
//     e.preventDefault();
//     const res = await fetch('http://localhost:3001/posts/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ title, content }),
//     });

//     if (res.ok) {
//       const newPost = await res.json();
//       setPosts([newPost, ...posts]);
//       setTitle('');
//       setContent('');
//     }
//   };

//   return (
//     <section style={{ padding: '20px', marginTop: '30px' }}>
//       <h2>Блог</h2>

//       <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
//         <input
//           type="text"
//           placeholder="Заголовок"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//           style={{ marginRight: '10px' }}
//         />
//         <textarea
//           placeholder="Содержание"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           required
//           style={{ marginRight: '10px' }}
//         ></textarea>
//         <button type="submit">Добавить статью</button>
//       </form>

//       <div>
//         {posts.map((post) => (
//           <div key={post._id} style={{ marginBottom: '10px' }}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//             <small>Создано: {new Date(post.createdAt).toLocaleString()}</small>
//             <hr />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



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
        const response = await fetch("http://localhost:3001/posts/");
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
      const res = await fetch("http://localhost:3001/posts/", {
        method: "POST",
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
