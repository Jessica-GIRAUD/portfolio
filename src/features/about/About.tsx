import Image from 'next/image';
import styles from './About.module.scss';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.left}>
        <h2> Je suis Jessica, Développeuse Front-end. </h2>
        <h1>
          Ensemble, donnons vie <br />à vos idées
          <span className="dot">.</span>
        </h1>
        {/*  <p className="intro">
          Je m&apos;appelle Jessica. Je suis développeuse web. <br />{' '}
          Pointilleuse et très sensible au design, je me distingue par mon Pixel
          Perfect.
        </p> */}
        <div style={{ marginTop: '20px' }}>
          <button>En savoir plus</button>
        </div>
      </div>

      <div className={styles.right}>
      
          <div className={styles.ready}>
            <Image
              src="/deco.jpg"
              alt="Jess"
              width={300}
              height={300}
              className={styles.image}
            />
            <p>
              Prêt à démarrer votre projet ? Je suis disponible pour en discuter
              !
            </p>
          </div>
          <div className={styles.last}>
            <div className={styles.contact}>
              <a href="tel:+33609974787">Contactez-moi</a>
            </div>
            <div className={styles.description}>
              <p>
              De React à Wordpress...
               {/*  Ensemble, donnons vie <br />à vos idées */}
                {/*  Passionnée par le développement web et riche d&apos;
            une expertise en React, WordPress, et
            WooCommerce, je vous aide à construire des sites performants et à
            l&apos;image de votre projet. */}
              </p>
            </div>

            <Image
              src="/laptop-with-flowers-coffee-cup.jpg"
              alt="laptop"
              width={500}
              height={200}
            />
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
