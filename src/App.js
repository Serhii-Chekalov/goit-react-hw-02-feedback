import React, { Component } from "react";
import { Section } from "./components/Section/Section.jsx";
import { Statistic } from "./components/Statistics/Statistics.jsx";
import { Button } from "./components/FeedbackOptions/FeedbackOptions.jsx";
import { Notification } from "./components/Notification/Notification.jsx";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <Button
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        {good || neutral || bad > 0 ? (
          <Section title="Statistic">
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </div>
    );
  }
}

export default App;
