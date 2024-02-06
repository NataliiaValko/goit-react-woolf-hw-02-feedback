import styles from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={styles.text}>{message}</p>;
};

export default Notification;
