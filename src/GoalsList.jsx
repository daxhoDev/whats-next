import Goal from "./Goal";

export default function GoalsList({ onToggleCompleted, sortedGoals, colors }) {
  return (
    <ul className={`goals-list ${sortedGoals.length === 0 ? "empty" : ""}`}>
      {sortedGoals.length > 0 ? (
        sortedGoals.map(el => (
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
