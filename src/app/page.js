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
// import BlogSection from "./components/BlogSection";
export default function Page() {
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
      <Footer/>
      {/* <BlogSection /> */}
    </div>

    
  );
}



