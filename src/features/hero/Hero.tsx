import Image from 'next/image';
import styles from './Hero.module.scss';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import Button from '@/components/button/Button';

export default function Hero() {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/#portfolio');
  };

  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h2>Développeuse Front-end</h2>
        <h1>
          Prête à coder vos idées
          <span className={`dot ${styles.dot}`}>
            .
          </span>
        </h1>

        <div style={{ marginTop: '20px' }}>
          <Button title="Découvrez mes projets" handleClick={handleClick} />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.ready}>
          <Image
            src="/Jess.jpg"
            alt="Jessica Lemarchand, développeur développeuse front end react"
            width={300}
            height={300}
            className={styles.image}
          />
          <p>
            On se lance ? Ensemble, construisons des solutions qui vous
            ressemblent. 🚀
        <br /><br />
            Avec du <strong>React</strong> (mais pas que !), de la créativité,
            et une petite dose de café, je transforme vos projets en expériences
            interactives qui dépotent. 🌟
          </p>
        </div>
        <div className={styles.last}>
          <div className={styles.contact}>
            <a href="tel:+33609974787">Me contacter</a>
          </div>
          <div className={styles.description}>
            <p>
              Sites vitrines, e-commerce, ERP : <br />
              du sur-mesure pensé pour vous.
            </p>
          </div>
          <div className={styles.laptop} />
        </div>
      </div>
    </section>
  );
}
