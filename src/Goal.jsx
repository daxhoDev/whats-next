export default function Goal({ goal, onToggleCompleted }) {
  return (
    <li className={`goal ${goal.isCompleted ? "completed" : ""}`}>
      <input type="checkbox" onChange={() => onToggleCompleted(goal)}></input>
      {goal.description}
    </li>
  );
}
