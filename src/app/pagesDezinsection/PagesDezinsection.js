// src/app/about/page.js
"use client"; // Укажите, что это клиентский компонент
import React from "react";
import { pagesMetaDezinsection } from "../metadata/pagesMetaDezinsection"; // Импортируем метаданные

// Не экспортируем метаданные здесь
export default function PagesDezinsection() {
  return (
    <div>
      <h1>{pagesMetaDezinsection.title}</h1>
      <p>{pagesMetaDezinsection.description}</p>
      {/* Остальной контент страницы */}
    </div>
  );
}
