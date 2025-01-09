import About from '@/features/about/About';
import Competences from '@/features/competences/Competences';
import Hero from '@/features/hero/Hero';
import Portfolio from '@/features/portfolio/Portofolio';
import Contact from '@/layouts/footer/Contact';
import Layout from '@/layouts/layout/Layout';
import styles from '@/styles/Common.module.scss';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Hero />
        <About />
        <Competences />

        <Portfolio />

        <Contact />
      </div>
    </Layout>
  );
}
