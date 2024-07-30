import css from "./Options.module.css";
function Options({ good, neutral, bad, updateFeedback, onResetBtn }) {
  return (
    <div className={css.boxOptions}>
      <button
        type="button"
        className={css.btnClick}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        type="button"
        className={css.btnClick}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        type="button"
        className={css.btnClick}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {(good > 0 || neutral > 0 || bad > 0) && (
        <button type="button" className={css.btnClick} onClick={onResetBtn}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
