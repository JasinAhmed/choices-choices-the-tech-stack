"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/components/LangProvider";
import Button from "@/components/atoms/Button";
import LanguageToggle from "@/components/atoms/LanguageToggle";
import styles from "./Navigation.module.css";

const MAIL = "mailto:frank.kloos@fonetic.studio";

export default function Navigation() {
  const { c } = useLang();
  const { button, links = [], openAlt, closeAlt, logoAlt } = c.navigation;

  const dialogRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  // Navbar verbergen bij naar beneden scrollen, tonen bij omhoog scrollen
  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY <= 0) setIsVisible(true);
        else if (currentScrollY > lastScrollY) setIsVisible(false);
        else if (currentScrollY < lastScrollY) setIsVisible(true);

        lastScrollY = currentScrollY;
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = () => dialogRef.current?.showModal();
  const closeMenu = () => dialogRef.current?.close();

  // Focus binnen het menu houden als het open is
  function menuKeydown(event) {
    const nav = dialogRef.current;
    if (event.key !== "Tab" || !nav?.open) return;

    const focusbaar = [...nav.querySelectorAll("a[href], button:not([disabled]), input")]
      .filter((el) => el.getClientRects().length > 0);

    const eerste = focusbaar[0];
    const laatste = focusbaar.at(-1);

    if (event.shiftKey && document.activeElement === eerste) {
      event.preventDefault();
      laatste.focus();
    }

    if (!event.shiftKey && document.activeElement === laatste) {
      event.preventDefault();
      eerste.focus();
    }
  }

  const navLinks = (onClick) =>
    links.map((link) => (
      <a key={link.href} href={link.href} onClick={onClick} className={styles.navLink}>
        {link.content}
        <div className={styles.underline}></div>
      </a>
    ));

  return (
    <header className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.navBar}>
        <a className={styles.logoLink} href="/">
          <picture>
            <source srcSet="/assets/full-logo-white.svg" media="(prefers-color-scheme: dark)" />
            <img src="/assets/full-logo.svg" alt={logoAlt} width="100" height="70" fetchPriority="high" />
          </picture>
        </a>

        <div className={styles.mobileNav}>
          <Button href={MAIL} classes="nav" content={button} />
          <button type="button" className={styles.iconButton} onClick={openMenu}>
            <img src="/assets/hamburger.svg" alt={openAlt} width="50" height="50" />
          </button>
        </div>

        <dialog ref={dialogRef} className={styles.dialog} onKeyDown={menuKeydown}>
          <div className={styles.menuTop}>
            <button type="button" className={`${styles.iconButton} ${styles.close}`} onClick={closeMenu} autoFocus>
              <img src="/assets/close-icon.svg" alt={closeAlt} width="25" height="25" />
            </button>
          </div>

          <nav className={styles.linksNav}>
            {navLinks(closeMenu)}
            <LanguageToggle />
            <Button href={MAIL} classes="nav" content={button} />
          </nav>
        </dialog>

        <nav className={styles.desktopNav}>
          {navLinks()}
          <LanguageToggle />
          <Button href={MAIL} classes="nav" content={button} />
        </nav>
      </div>
    </header>
  );
}
