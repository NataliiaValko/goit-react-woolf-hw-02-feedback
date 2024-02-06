import { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Section from '../Section';
import Notification from '../Notification';
import styles from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => {
      return (total += value);
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() > 0
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : '0';
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    return (
      <>
        <div className={styles.wrapper}>
          <Section title="Please leave your">
            <FeedbackOptions
              onLeaveFeedback={this.onLeaveFeedback}
              options={options}
            />
          </Section>
        </div>
        <Section>
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given..." />
          )}
        </Section>
      </>
    );
  }
}

export default App;
