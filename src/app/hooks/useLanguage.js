// // src/hooks/useLanguage.js
// "use client";
// import { useContext } from "react";
// import { LanguageContext } from "@/app/LanguageContext";

// const useLanguage = () => {
//   const context = useContext(LanguageContext);

//   if (!context) {
//     throw new Error("useLanguage must be used within a LanguageProvider");
//   }

//   return context;
// };

// export default useLanguage;

"use client";
import { useContext } from "react";
import { LanguageContext } from "@/app/LanguageContext";

const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage должен использоваться внутри LanguageProvider");
  }

  return context;
};

export default useLanguage;
