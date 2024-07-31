import css from "./Feedback.module.css";
function Feedback({ good, neutral, bad, total, positiveFeedback }) {
  return (
    <div className={css.list}>
      <ul>
        <li className={css.item}>Good: {good}</li>
        <li className={css.item}>Neutral: {neutral}</li>
        <li className={css.item}>Bad: {bad}</li>
        <li className={css.item}>Total: {total}</li>
        {good > 0 && (
          <li className={css.item}>Positive: {positiveFeedback}%</li>
        )}
      </ul>
    </div>
  );
}

export default Feedback;
