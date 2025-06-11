export default function Goal({ goal, onToggleCompleted, colors }) {
  return (
    <li
      className={`goal ${goal.isCompleted ? "completed" : ""}`}
      style={{
        borderLeft: `0.5em solid ${
          colors.find(el => el.name === goal.color).hex
        }`,
      }}
    >
      <input
        className="check-completed"
        type="checkbox"
        checked={goal.isCompleted}
        onChange={() => onToggleCompleted(goal)}
      ></input>
      {goal.description}
    </li>
  );
}
