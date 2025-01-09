import Divider from '@/components/divider/Divider';
import styles from './Competences.module.scss';
import Image from 'next/image';

export default function Competences() {
  return (
    <section
      style={{ width: '100%', padding: '40px' }}
      id="competences"
      className={styles.competences}
    >
      <section className={styles.section}>
        <div className={styles.header}>
          <h1>
            compétences<span className="dot">.</span>
          </h1>
          <p className={styles.intro}>
            Construire des solutions, une ligne de code à la fois.
          </p>
          <p>
            Avec une maîtrise solide de React, TypeScript et React Native,
            j’imagine et développe des applications modernes et mobiles pensées
            pour répondre à vos besoins. Je crée également des sites web
            professionnels sous WordPress et conçois des boutiques en ligne
            performantes avec WooCommerce.
            <br />
            <br />
            Chaque projet est pour moi l’occasion de transformer des idées en
            interfaces intuitives et des concepts en solutions concrètes. Mon
            approche est guidée par la recherche de la performance,
            l’innovation, et l’attention aux détails.
            <br />
            <br />
            Laissez-moi vous montrer comment un code bien pensé peut être un
            levier puissant pour vos ambitions digitales.
          </p>
        </div>
        <div className={styles.container}>
          <Image
            src="/knowledge.png"
            alt="knowledge"
            className={styles.picture}
            width={500}
            height={350}
          />
        </div>
      </section>

      <div>
        <Divider title="Part codeuse" />

        <div className={styles.canva}></div>

        <ul style={{ padding: '40px' }}>
          <li>Développement Front-end</li>
          <li>React / React Native</li>
          <li>TypeScript</li>
          <li>Un peu de back-end (J&apos;essaie, promis !)</li>
          <li>Jurer contre les bugs, mais toujours avec un sourire ! 😅</li>
        </ul>
      </div>
      <div>
        <Divider title="Part constructive" />

        <ul style={{ padding: '40px' }}>
          <li>Archi-pro dans l&apos;assemblage de la cabine de l&apos;A350</li>
          <li>Création de sites web</li>
          <li>Création de flyers et cartes de visite</li>
          <li>
            Résolution de puzzles (Parce que tout problème a une solution… ou
            presque !)
          </li>
        </ul>
      </div>
      <div>
        <Divider title="Autre talents" />

        <ul style={{ padding: '40px' }}>
          <li>Fan de sports de glisse et de foot ⚽</li>
          <li>
            Épicurienne : rhum et tout ce qui se mange, encore mieux si ça pique
            !🌶️{' '}
          </li>
          <li>Joie de vivre communicative</li>
          <li>Faire la grasse matinée</li>
        </ul>
      </div>
    </section>
  );
}
