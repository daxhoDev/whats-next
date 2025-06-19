export default function Goal({ goal, onToggleCompleted, colors }) {
  return (
    <li
      className={`goal ${goal.isCompleted ? "completed" : ""}`}
      style={{
        borderLeft: `0.5rem solid ${
          colors.find(el => el.name === goal.color).hex
        }`,
      }}
    >
      <input
        id={goal.id}
        className="check-completed"
        type="checkbox"
        readOnly
        checked={goal.isCompleted}
        onClick={() => onToggleCompleted(goal)}
      ></input>
      {goal.description}
    </li>
  );
}
