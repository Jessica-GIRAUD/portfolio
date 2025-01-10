import Image from 'next/image';
import styles from './Hero.module.scss';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import Button from '@/components/button/Button';

export default function Hero() {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/#competences');
  };

  return (
    <section className={styles.about}>
      <div className={styles.left}>
        <h2> Développeuse Front-end.</h2>
        <h1>
          Ensemble, donnons vie <br />à vos idées
          <span className="dot">.</span>
        </h1>

        <div style={{ marginTop: '20px' }}>
          <Button title="En savoir plus" handleClick={handleClick} />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.ready}>
          <Image
            src="/Jess.jpg"
            alt="Jess"
            width={300}
            height={300}
            className={styles.image}
          />
          <p>
            Prêt à démarrer votre projet ? Je suis disponible pour en discuter !
          </p>
        </div>
        <div className={styles.last}>
          <div className={styles.contact}>
            <a href="tel:+33609974787">Contactez-moi</a>
          </div>
          <div className={styles.description}>
            <p>De React à Wordpress...</p>
          </div>

          <div className={styles.laptop} />
         {/*  <Image
            src="/laptop-with-flowers-coffee-cup.jpg"
            alt="laptop"
            width={500}
            height={200}
          /> */}
        </div>
      </div>
      {/*   <div className={styles.reseau}>
          <Link
            href="https://www.linkedin.com/in/jessica-giraud/"
            target="_blank"
          >
            <Image alt="logo" src="/linkedin.svg" width={30} height={30} />
          </Link>
          <Link
            href="https://www.malt.fr/profile/jessicagiraud"
            target="_blank"
          >
            <Image alt="logo" src="/malt.svg" width={30} height={30} />
          </Link>
        </div>
      </div> */}
    </section>
  );
}
