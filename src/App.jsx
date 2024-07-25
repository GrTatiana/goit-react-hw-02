import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

function App() {
  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  // const updateFeedback = (feedbackType) => {
  //   // Тут використовуй сеттер, щоб оновити стан
  //   setCount;
  // };
  const totalFeedback = count.good + count.neutral + count.bad;

  return (
    <>
      <Description />
      {/* <Options /> */}
      <Feedback
        good={count.good}
        neutral={count.neutral}
        bad={count.bad}
        total={totalFeedback}
        positive={100}
      />
      {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
    </>
  );
}

export default App;
