import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

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

  return (
    <header className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
      <Link href="/">
        <Image alt="logo" src="/logo.svg" width={250} height={250} />
      </Link>
      <ul>
        {menuItems.map((item, index) => {
          return (
            <li
              key={index}
              className={activeSection === item.id ? styles.active : ''}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
