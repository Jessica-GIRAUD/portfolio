import Divider from '@/components/divider/Divider';
import styles from './Portfolio.module.scss';
import projects from '../../pages/projet/projets.json';
import Carrousel from '@/components/carrousel/Carrousel';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className={styles.portfolio}
    >
      <section className={styles.section}>
        <div className={styles.header}>
          <h1>
            portfolio<span className="dot">.</span>
          </h1>
          <p className="intro">Bienvenue dans mon univers de développement.</p>
          <p className={styles.description}>
            Je vous invite à découvrir quelques-uns de mes projets récents, où
            j&apos;ai combiné expertise technique et créativité pour répondre à
            divers besoins. De la création d&apos;applications modernes avec
            React et TypeScript, au développement de sites professionnels sous
            WordPress, en passant par la mise en place de boutiques en ligne
            optimisées avec WooCommerce, chaque projet reflète ma passion pour
            le code et mon souci du détail. Explorez ces réalisations qui
            incarnent mon engagement à fournir des solutions performantes et
            adaptées.
          </p>
        </div>
        <div className={styles.container}>
          <Image
            src="/setup.png"
            alt="setup"
            className={styles.picture}
            fill
          />
          <Image
             src="/setup.png"
            alt="setup"
            className={styles.picture}
            fill
          />
          <Image
             src="/setup.png"
            alt="setup"
            className={styles.picture}
            fill
          />
          <Image
             src="/setup.png"
            alt="setup"
            className={styles.picture}
            fill
          />
        </div>
      </section>
      <Divider title="Mes projets" />
      <Carrousel items={projects} />
    </section>
  );
}
