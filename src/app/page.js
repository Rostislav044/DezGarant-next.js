"use client";

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Head from "next/head"; // Импортируем Head для установки метаданных
// import { pagesHom } from "./metadata/pagesHom";

import Section from "./components/Section";
import BurgerMenu from "./components/BurgerMenu";
import SlideComponent from "./components/SlideComponent";
import Service from "@/app/components/Service";
import Section2 from "@/app/components/Section2";
import Section3 from "@/app/components/Section3";
import Reviews from "@/app/components/Reviews";
import Footer from "@/app/components/Footer";
import styles from '@/app/globals.scss';
// import FormConsultation "@/app/components/FormConsultation";
import BlogSection from "./components/BlogSection";
export default function Page() {
<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(()=>{
    async function fetchPosts() {
    try {
      const response = await fetch('http://localhost:3001/posts/');
      // const response =await fetch ('https://dezgarant-next-js.onrender.com');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const posts = await response.json();
      console.log(posts);
    } catch (error) {
      console.error(error.message);
    }
  }
  fetchPosts();
  },[])
=======
  // useEffect(()=>{
  //   async function fetchPosts() {
  //   try {
  //     const response = await fetch('http://localhost:3001/posts/');
  //     // const response =await fetch ('https://dezgarant-next-js.onrender.com');
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch posts');
  //     }
  //     const posts = await response.json();
  //     console.log(posts);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }
  // fetchPosts();
  // },[])
>>>>>>> 5e2d7a66302ab81ad5e6b155e9a3b7352f209ff3
=======

>>>>>>> a6e8496822e1dbc28ec9639464f65f22d459ed47
  return (
    <div>
      <Head>
        
        <meta name="description" content="Санитарная служба DezGarant" />
      </Head>
      <Header/>
      <Section/>
      <BurgerMenu/>
      <SlideComponent/>
      <Service/>
      <Section2/>
      <Section3/>
      <Reviews/>
      <BlogSection />
      <Footer/>
     
    </div>

    
  );
}




