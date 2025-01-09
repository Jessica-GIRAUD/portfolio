import Image from 'next/image';
import styles from './About.module.scss';

export default function About() {
  return (
    <>
      <section
        id="about"
        className={styles.about}
        style={{ width: '100%', padding: '40px' }}
      >
        <div className={styles.header}>
          <h1>
            à propos de moi<span className="dot">.</span>
          </h1>
          <p className={styles.intro}>Bienvenue dans mon univers !</p>
        </div>
      </section>
      <div className={styles.flex}>
        <div className={styles.left}>
          {' '}
          <Image
            src="/html2.png"
            alt="html"
            className={styles.image}
            width={940}
            height={780}
          />
        </div>
        <div className={styles.right}>
          <h2 className={styles.question}>Qui suis-je ?</h2>
          <p>
            <strong>Jessica</strong>, développeuse web freelance et architecte
            de solutions sur-mesure. Je suis une touche-à-tout passionnée, maman
            pétillante de deux garçons, et{' '}
            <strong>développeuse front-end</strong> dans l’âme depuis 4 ans. Mon
            aventure a commencé à la Wild Code School de Toulouse, où j’ai
            découvert mon coup de cœur pour React et TypeScript. Depuis, j’ai
            enchaîné des projets passionnants chez Capgemini (Walk pour SAFRAN,
            Skywise pour AIRBUS) et Menaps, où j’ai affiné mes compétences en
            React, React Native, et bien plus encore. <br />
            <br />
            Mon superpouvoir ?{' '}
            <strong>M’adapter à toutes les situations.</strong> Que ce soit en
            participant à des meetings internationaux (vive les accents
            chantants), en jonglant entre GitLab, GitHub et Azure DevOps, ou en
            intégrant des méthodologies SCRUM au quotidien, je relève chaque
            défi avec une bonne dose d’enthousiasme et de curiosité.
          </p>
          <h2 className={styles.question}>Ce qui me motive ?</h2>
          <p>
            Créer des interfaces performantes ET agréables à utiliser. Parce
            que, soyons honnêtes, un beau code, c’est bien, mais une belle
            expérience utilisateur, c’est encore mieux !
          </p>
          <h2 className={styles.question}>Et en dehors du code ?</h2>
          <p>
            Quand je ne suis pas devant mon écran, je joue au foot ou je me fais
            battre par mes garçons sur Fortnite (sans rancune). Epicurienne et
            pleine de joie de vivre, j’aime partager des moments simples,
            déguster des plats épicés 🌶️, et profiter des petits bonheurs du
            quotidien. Alors, si vous cherchez une développeuse qui allie
            technique, créativité, et humour…{' '}
            <strong>je suis prête à embarquer dans votre projet !</strong>
            🚀
          </p>
        </div>
      </div>
    </>
  );
}
