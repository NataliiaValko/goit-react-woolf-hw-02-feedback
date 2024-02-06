import styles from './Statistics.module.css';

const Statistics = ({ bad, neutral, good, total, positivePercentage }) => {
  return (
    <>
      <h2 className={styles.title}>Statistics</h2>
      <div className={styles.divst}>
        <div className={styles.options}>
          <div className={styles.good}>
            <p className={styles.text}>good: {good}</p>
          </div>
          <div className={styles.neutral}>
            <p className={styles.text}>neutral: {neutral}</p>
          </div>
          <div className={styles.bad}>
            <p className={styles.text}>bad: {bad}</p>
          </div>
        </div>
        <div className={styles.total}>
          <p className={styles.text}>Total: {total}</p>
        </div>
        <div className={styles.positivePercentage}>
          <p className={styles.text}>
            Positive feedback: {positivePercentage}%
          </p>
        </div>
      </div>
    </>
  );
};

export default Statistics;
