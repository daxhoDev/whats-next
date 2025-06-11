import Goal from "./Goal";

export default function GoalsList({
  goals,
  onToggleCompleted,
  filter,
  colors,
}) {
  const currentGoals =
    filter === "achieved"
      ? goals.filter(el => el.isCompleted)
      : filter === "pending"
      ? goals.filter(el => !el.isCompleted)
      : goals;

  return (
    <ul className={`goals-list ${currentGoals.length === 0 ? "empty" : ""}`}>
      {currentGoals.length > 0 ? (
        currentGoals.map(el => (
          <Goal
            key={el.id}
            goal={el}
            onToggleCompleted={onToggleCompleted}
            colors={colors}
          />
        ))
      ) : (
        <p className="text-empty-form">Nothing to display right now!</p>
      )}
    </ul>
  );
}
