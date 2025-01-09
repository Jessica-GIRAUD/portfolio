import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Project.module.scss';
import Stack from '@/components/stack/Stack';
import { useRouter } from 'next/router';

import projects from './projets.json';
import Layout from '@/layouts/layout/Layout';
import Button from '@/components/button/Button';

interface IProjectProps {
  project: {
    title: string;
    shortDescription: string;
    description: string[] | string;
    lienURL: string;
    image: string;
    stacks: string[];
  };
}

const Project: FC<IProjectProps> = () => {
  const router = useRouter();
  const currentProjectId = router.query.id
    ? parseInt(router.query.id as string, 10)
    : 1;
  const project = projects.find((project) => project.id === currentProjectId);

  // Trouver l'indice du projet actuel
  const currentIndex = projects.findIndex(
    (project) => project.id === currentProjectId
  );

  // Calculer l'ID du projet précédent et suivant
  const previousProject =
    projects[currentIndex - 1] || projects[projects.length - 1];
  const nextProject = projects[currentIndex + 1] || projects[0];

  return (
    <Layout>
      <section className={styles.projet}>
        {/* Flèche gauche */}
        <Link href={`/projet/${previousProject.id}`} passHref>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.arrow + ' ' + styles.arrowLeft}
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>

        {project ? (
          <div className={styles.flexCol}>
            <div className={styles.flexRow}>
              <div className={styles.flexCol}>
                <h1>
                  {project.title.toLowerCase()}
                  <span className="dot">.</span>
                </h1>
                <p className="intro">{project.shortDescription}</p>

                {Array.isArray(project.description) ? (
                  project.description.map((desc, index) => (
                    <p className={styles.description} key={index}>
                      {desc}
                    </p>
                  ))
                ) : (
                  <p className={styles.description}>project.description </p>
                )}
                <div className={styles.stacksContainer}>
                  {project.stacks.map((stack) => (
                    <Stack key={stack} stack={stack} />
                  ))}
                </div>
                <Button lienURL={project.lienURL} title="Visite le site" />
              </div>

              <Image
                src={project.image}
                alt={project.title}
                className={styles.image}
                width={940}
                height={780}
              />
            </div>
            {/* Flèche droite */}
            <Link href={`/projet/${nextProject.id}`} passHref>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.arrow + ' ' + styles.arrowRight}
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          </div>
        ) : (
          <div>No project found</div>
        )}
      </section>
    </Layout>
  );
};

export default Project;
