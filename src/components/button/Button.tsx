import Link from 'next/link';
import { FC, MouseEvent } from 'react';
import styles from './Button.module.scss';

interface IButtonPropos {
  lienURL?: string;
  title: string;
  handleClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
const Button: FC<IButtonPropos> = (props) => {
  return props.lienURL ? (
    <Link target="_blank" href={props.lienURL} className={styles.btn}>
      {props.title}
    </Link>
  ) : (
    <button onClick={props.handleClick}>En savoir plus</button>
  );
};

export default Button;
