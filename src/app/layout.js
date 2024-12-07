



"use client";
import { LanguageProvider } from "@/app/LanguageContext";

import styles from '../../src/app/styles/PageStyles.module.scss'; 

export default function Layout({ children }) {
  
  return (
    <html lang="ua">
      <body className={styles.divContainer}>
        <LanguageProvider>
          
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
