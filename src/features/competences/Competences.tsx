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
              <li>Front-end development</li>
              <li>React / React Native</li>
              <li>TypeScript</li>
              <li>Un peu de back-end</li>
              <li>Swearing at bugs!</li>
            </ul>
          </div>
          <div>
            <Divider title="Part constructive" />

            <ul style={{ padding: '40px' }}>
              <li>Passion for aviation</li>
              <li>Building sites web</li>
              <li>Flyers and business cards</li>
              <li>Obsessed with Legos</li>
              <li>Solving puzzles</li>
            </ul>
          </div>
          <div>
            <Divider title="Autre talents" />

            <ul style={{ padding: '40px' }}>
              <li>Fan de sports de glisse et de foot</li>
              <li>Épicurienne : rhum et cuisine grasse</li>
              <li>Joie de vivre communicative</li>
              <li>5% seulement pour dormir !</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
