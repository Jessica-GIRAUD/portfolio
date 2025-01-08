import Divider from '@/components/divider/Divider';
import styles from './Competences.module.scss';

export default function Competences() {
  return (
    <section
      style={{ width: '100%', padding: '40px' }}
      id="competences"
      className={styles.competences}
    >

        <div  className={styles.header}>
          <h1 >
            compétences<span className="dot">.</span>
          </h1>
          <p className={styles.intro}>Bienvenue dans mon univers de développement.</p>
          <p>
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

      <div>
        <div>
          <div>
            <Divider title="Part codeuse" />
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
              <li>Résolution de puzzles (Parce que tout problème a une solution… ou presque !)</li>
            </ul>
          </div>
          <div>
            <Divider title="Autre talents" />

            <ul style={{ padding: '40px' }}>
              <li>Fan de sports de glisse et de foot ⚽</li>
              <li>Épicurienne : rhum et tout ce qui se mange, encore mieux si ça pique !🌶️ </li>
              <li>Joie de vivre communicative</li>
              <li>Faire la grasse matinée</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
