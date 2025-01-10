import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Apparition du header à l'arrivée sur la page d'accueil
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // Délai pour déclencher l'animation (optionnel)
  }, []);

  const menuItems = useMemo(
    () => [
      { name: 'à propos', path: '/#about', id: 'about' },
      { name: 'projets', path: '/#portfolio', id: 'portfolio' },
      { name: 'contact', path: '/#contact', id: 'contact' },
    ],
    []
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // 60% visible pour être considéré comme actif
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observer chaque section
    menuItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => {
      // Déconnecter l'observateur lors du démontage
      observer.disconnect();
    };
  }, [menuItems]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
      <Link href="/">
        <Image alt="logo" src="/logo.svg" width={250} height={250} />
      </Link>
      <div
        className={`${styles.burger} ${isMobileMenuOpen ? styles.open : ''}`}
        onClick={toggleMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`${styles.menu} ${isMobileMenuOpen ? styles.open : ''}`}>
        {menuItems.map((item, index) => {
          return (
            <li
              key={index}
              className={activeSection === item.id ? styles.active : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
