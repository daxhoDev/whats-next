export default function Goal({
  goal,
  onToggleCompleted,
  onToggleConfirmation,
  onOpenGoal,
  openGoal,
  colors,
}) {
  return (
    <li
      className={`goal ${goal.isCompleted ? "completed" : ""}`}
      style={{
        borderLeft: `0.5rem solid ${
          colors.find(el => el.name === goal.color).hex
        }`,
      }}
      onClick={e => {
        if (e.target.classList.contains("button")) return;
        onOpenGoal(goal);
      }}
    >
      <div className="goal-info">
        <input
          id={goal.id}
          className="check-completed"
          type="checkbox"
          readOnly
          checked={goal.isCompleted}
          onClick={() => onToggleCompleted(goal)}
        ></input>
        <p className="description">{goal.description}</p>
      </div>
      {openGoal === goal && (
        <div className="goal-buttons">
          <button
            className="button button-remove"
            onClick={() => onToggleConfirmation()}
          >
            &times; Remove
          </button>
        </div>
      )}
    </li>
  );
}
