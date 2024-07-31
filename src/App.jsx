import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useState(() => {
    const stateSave = window.localStorage.getItem("feedback", { count });
    if (stateSave) {
      setCount(JSON.parse(stateSave));
    }
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(count));
  }, [count]);

  const updateFeedback = (feedbackType) => {
    setCount({ ...count, [feedbackType]: count[feedbackType] + 1 });
  };

  const onResetBtn = () => {
    setCount({ good: 0, neutral: 0, bad: 0 });
    localStorage.removeItem("feedback");
  };

  const totalFeedback = count.good + count.neutral + count.bad;

  const positiveFeedback = Math.round((count.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        good={count.good}
        neutral={count.neutral}
        bad={count.bad}
        onResetBtn={onResetBtn}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={count.good}
          neutral={count.neutral}
          bad={count.bad}
          total={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
