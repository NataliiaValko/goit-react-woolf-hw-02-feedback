import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <ul className={styles.button__list}>
    {options.map(name => (
      <li key={name} className={styles.button__item}>
        <button
          type="button"
          className={styles[name]}
          onClick={() => onLeaveFeedback(name)}
        >
          {name}
        </button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;
