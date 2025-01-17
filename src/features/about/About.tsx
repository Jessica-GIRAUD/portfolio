import Image from 'next/image';
import styles from './About.module.scss';
import Button from '@/components/button/Button';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.left}>
        <h1>
          à propos de moi<span className="dot">.</span>
        </h1>
        <p className={styles.intro}>Bienvenue dans mon univers !</p>

        <Image src="/html2.png" alt="html" className={styles.image} fill />
      </div>
      <div className={styles.right}>
        <h2 className={styles.question}>Qui suis-je ?</h2>
        <p>
          <strong>Jessica</strong>, enchantée ! ✨
          <br />
          <br />
          <strong>Développeuse front-end</strong> depuis 4 ans, architecte de
          solutions sur-mesure, et championne (auto-proclamée) de React et
          TypeScript.
          <br />
          <br />
          Mon aventure a commencé à la{' '}
          <strong>Wild Code School de Toulouse</strong>, où j’ai découvert que
          coder me faisait vibrer presque autant qu’un bon plat épicé 🌶️.
          Depuis, j’ai embarqué dans des projets de folie chez Capgemini (on
          parle de SAFRAN et AIRBUS, rien que ça) et Menaps, où j’ai peaufiné
          mes superpouvoirs :{' '}
          <strong>
            NextJS, React Native, RematchJS et un sourire à toute épreuve.
          </strong>
        </p>
        <h2 className={styles.question}> Mon superpouvoir ?</h2>
        <p>
          M’adapter à tout. Vraiment TOUT. Un daily en anglais ? Avec plaisir,
          même avec mon french accent. Jongler entre{' '}
          <strong>GitLab, GitHub et Azure DevOps</strong> ? Aucun souci. Un
          sprint <strong>SCRUM</strong> avec des deadlines corsées ? Challenge
          accepted !
        </p>
        <h2 className={styles.question}>Pourquoi j’adore ce que je fais ?</h2>
        <p>
          Parce que pour moi, un site web, c’est bien plus qu’un bout de code.
          C’est une expérience. J’adore créer des interfaces qui ne se
          contentent pas d’être belles, mais qui donnent envie d’être utilisées.
        </p>
        <h2 className={styles.question}>Et quand je ne code pas ?</h2>
        <p>
          Je suis sur le terrain à jouer au foot, ou en train de me faire battre
          à plate couture par mes garçons sur Fortnite (ils appellent ça de
          l’entraînement, moi j’appelle ça de l’humiliation 🤷‍♀️). J’adore les
          moments simples, les plats qui piquent, et l’idée que chaque jour est
          une nouvelle aventure. <br />
          <br /> Alors, si vous cherchez{' '}
          <strong>une développeuse créative, technique </strong>, et prête à
          relever tous les défis (même sur Fortnite)… Hop, prête à embarquer !
          🚀
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button title="Télécharger mon CV" lienURL="/cv.pdf" download="CV Jessica LEMARCHAND" />
        </div>
      </div>
    </section>
  );
}
