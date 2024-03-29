import React, { FC } from 'react';
import styles from './styles.module.scss';

interface Props {}

export const Loading: FC<Props> = ({}: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.loading}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
};
