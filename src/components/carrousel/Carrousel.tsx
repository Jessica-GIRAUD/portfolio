import { FC } from 'react';
import Card from '../card/Card';
import styles from '../card/Card.module.scss';

interface ICarrouselProps {
  items: {
    id: number;
    title: string;
    image: string;
    shortDescription: string;
  }[];
}
const Carrousel: FC<ICarrouselProps> = (props) => {
  return (
    <section className={styles.container}>
      {props.items.map(({ id, title, image, shortDescription }) => (
        <Card
          key={`project-${id}`}
          title={title}
          image={image}
          id={id}
          shortDescription={shortDescription}
        />
      ))}
    </section>
  );
};

export default Carrousel;
