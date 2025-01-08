
import { FC } from 'react';
import styles from './Stack.module.scss';

interface IStackProps {
  stack: string;
}
const Stack: FC<IStackProps> = (props) => {
  const { stack } = props;

  return <div className={styles.card}>{stack}</div>;
};

export default Stack;
