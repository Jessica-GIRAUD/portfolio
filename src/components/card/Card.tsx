import { FC } from 'react';
import styles from './Card.module.scss';
import Link from 'next/link';

interface ICardProps {
  title: string;
  image: string;
  id: number;
  shortDescription: string;
}
const Card: FC<ICardProps> = (props) => {
  const { title, image, id, shortDescription } = props;
  return (
    <div className={styles.card}>
      <div
        className={styles.cover}
        style={{ backgroundImage: `url(${image})` }}
      >
        <h3>{title}</h3>

        <div className={styles.cardBack}>
          <Link href={`/projet/${id}`}>Voir en détail</Link>
          <h4>{shortDescription}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
