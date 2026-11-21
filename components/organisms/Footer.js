"use client";

import { useLang } from "@/components/LangProvider";
import Button from "@/components/atoms/Button";
import styles from "./Footer.module.css";

export default function Footer() {
  const { c } = useLang();
  const { links = [], button } = c.navigation;
  const { title, descriptionFirst, descriptionSecond } = c.footer;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <a href="/" className={styles.logo}>
            <picture>
              <source srcSet="/assets/full-logo-white.svg" media="(prefers-color-scheme: dark)" />
              <img src="/assets/full-logo.svg" alt="Prologg logo" width="100" height="70" fetchPriority="low" loading="lazy" />
            </picture>
          </a>

          <h2 className={styles.brandTitle}>{title}</h2>

          <p className={styles.brandDescription}>
            <span>{descriptionFirst}</span>
            <span>{descriptionSecond}</span>
          </p>
        </div>

        <nav className={styles.navigation}>
          <h2 className={styles.heading}>Navigatie</h2>
          <ul>
            {links.map(({ content, href }) => (
              <li key={href}>
                <a href={href} className={styles.link}>{content}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contact}>
          <h2 className={styles.heading}>Contact</h2>
          <address>
            <a href="mailto:frank.kloos@fonetic.studio" className={styles.link}>
              frank.kloos@fonetic.studio
            </a>
          </address>
          <div className={styles.demo}>
            <Button href="mailto:frank.kloos@fonetic.studio" classes="nav" content={button} />
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; Prologg for Legal</p>
      </div>
    </footer>
  );
}
