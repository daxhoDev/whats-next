import Goal from "./Goal";

export default function GoalsList({ goals, onToggleCompleted, filter }) {
  return (
    <ul className="goals-list">
      {filter === "all" &&
        goals.map(el => (
          <Goal key={el.id} goal={el} onToggleCompleted={onToggleCompleted} />
        ))}
      {filter === "achieved" &&
        goals.map(
          el =>
            el.isCompleted && (
              <Goal
                key={el.id}
                goal={el}
                onToggleCompleted={onToggleCompleted}
              />
            )
        )}
      {filter === "pending" &&
        goals.map(
          el =>
            !el.isCompleted && (
              <Goal
                key={el.id}
                goal={el}
                onToggleCompleted={onToggleCompleted}
              />
            )
        )}
    </ul>
  );
}
