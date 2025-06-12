export default function Goal({ goal, onToggleCompleted, colors }) {
  return (
    <li
      className={`goal ${goal.isCompleted ? "completed" : ""}`}
      style={{
        borderLeft: `0.5em solid ${
          colors.find(el => el.name === goal.color).hex
        }`,
      }}
      onClick={() => onToggleCompleted(goal)}
    >
      <input
        id={goal.id}
        className="check-completed"
        type="checkbox"
        readOnly
        checked={goal.isCompleted}
      ></input>
      {goal.description}
    </li>
  );
}
