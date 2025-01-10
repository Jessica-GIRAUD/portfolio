import Image from 'next/image';
import styles from './Contact.module.scss';
import Button from '@/components/button/Button';

export default function Contact() {
  return (
    <footer className={styles.contact} id="contact">
      <section className={styles.section}>
        <div className={styles.header}>
          <h1>
            contact<span className="dot">.</span>
          </h1>
          <p className="intro">
            Une idée, un projet ou juste envie de discuter ? Je serais ravie de
            vous entendre !
          </p>
        </div>

        <div className={styles.contactForm}>
          <h3>Mes Coordonnées</h3>
          <ul className={styles.infoList}>
            <li>
              <Image src="/mail.svg" alt="Icone email" width={25} height={25} />
              <a href="mailto:jessica.giraud1@gmail.com">
                jessica.giraud1@gmail.com
              </a>
            </li>
            <li>
              <Image
                src="/tel.svg"
                alt="Icone téléphone"
                width={25}
                height={25}
              />
              <a href="tel:+33609974787">+33 6 09 97 47 87</a>
            </li>
            <li>
              <Image
                src="/adresse.svg"
                alt="Icone localisation"
                width={25}
                height={25}
              />
              Toulouse, France
            </li>
          </ul>

          <h3>Envoyez-moi un message</h3>
          <form
            className={styles.form}
            action="https://formspree.io/f/your-form-id"
            method="POST"
          >
            <div className={styles.formGroup}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Entrez votre nom"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                id="email"
                name="_replyto"
                placeholder="Entrez votre adresse email"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                id="message"
                name="message"
                placeholder="Expliquez-moi votre projet..."
                rows={5}
                required
              ></textarea>
            </div>
            <Button title="Envoyer" />
          </form>
        </div>
      </section>
    </footer>
  );
}
