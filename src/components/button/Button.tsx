import Link from 'next/link';
import { FC, MouseEvent } from 'react';
import styles from './Button.module.scss';

interface IButtonPropos {
  lienURL?: string;
  title: string;
  handleClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  download?: string;
}
const Button: FC<IButtonPropos> = (props) => {
  return props.lienURL ? (
    <Link
      target="_blank"
      href={props.lienURL}
      download={props.download}
      className={styles.btn}
    >
      {props.title}
    </Link>
  ) : (
    <button
      className={styles.btn}
      onClick={props.handleClick ? props.handleClick : undefined}
      type={props.handleClick ? 'button' : 'submit'}
    >
      {props.title}
    </button>
  );
};

export default Button;
