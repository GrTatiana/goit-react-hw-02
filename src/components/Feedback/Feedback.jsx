import css from "./Feedback.module.css";
function Feedback({ good, neutral, bad, total, positiveFeedback }) {
  return (
    <div className={css.list}>
      <ul>
        {(good > 0 || neutral > 0 || bad > 0) && (
          <li className={css.item}>Good: {good}</li>
        )}
        {(good > 0 || neutral > 0 || bad > 0) && (
          <li className={css.item}>Neutral: {neutral}</li>
        )}
        {(good > 0 || neutral > 0 || bad > 0) && (
          <li className={css.item}>Bad: {bad}</li>
        )}
        {(good > 0 || neutral > 0 || bad > 0) && (
          <li className={css.item}>Total: {total}</li>
        )}
        {good > 0 && (
          <li className={css.item}>Positive: {positiveFeedback}%</li>
        )}
      </ul>
    </div>
  );
}

export default Feedback;
