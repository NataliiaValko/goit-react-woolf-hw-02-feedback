import Container from '../Container';

import styles from './Section.module.css';

const Section = ({ title = '', children }) => (
  <section className={styles.section}>
    <Container>
      {title && (
        <h1 className={styles.title} aria-label="Please leave your feedback">
          {title}
        </h1>
      )}
      {children}
    </Container>
  </section>
);

export default Section;
