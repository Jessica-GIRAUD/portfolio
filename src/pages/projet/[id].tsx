import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Project.module.scss';
import Stack from '@/components/stack/Stack';
import { useRouter } from 'next/router';

import projects from './projets.json';
import Layout from '@/layouts/layout/Layout';

interface IProjectProps {
  project: {
    title: string;
    shortDescription: string;
    lienURL: string;
    image: string;
    stacks: string[];
  };
}
const Project: FC<IProjectProps> = () => {
  const router = useRouter();
  const project = projects.find(
    (project) => project.id.toString() === router.query.id
  );

  return (
    <Layout>
      <section className="section">
      <i className="fa fa-chevron-left" style={{fontSize: 20, color: 'black'}} aria-hidden="true"/>
      <i className="fa fa-chevron-right" aria-hidden="true"></i>
        {project ? (
          <div className={styles.flexCol}>
            <div className={styles.flexRow}>
              <div className={styles.flexCol}>
                <h1>
                  {project.title.toLowerCase()}
                  <span className="dot">.</span>
                </h1>
                <p className="intro">{project.shortDescription}</p>
              </div>
              <div>
                <Image
                  src={project.image}
                  alt={project.title}
                  className={styles.image}
                  width={300}
                  height={250}
                />
              </div>
            </div>
            <div className={styles.stacksContainer}>
              {project.stacks.map((stack) => (
                <Stack key={stack} stack={stack} />
              ))}
            </div>
          
              <Link
                target="_blank"
                href={project.lienURL}
               className={styles.btn}
              >
                Voir le site
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
