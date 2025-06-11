import { useState } from "react";
import Header from "./Header";
import GoalsList from "./GoalsList";
import Button from "./Button";

const initialGoals = [
  { id: 569823, isCompleted: false, description: "Buy a new phone" },
  { id: 52214789, isCompleted: false, description: "Master React development" },
  {
    id: 7895236,
    isCompleted: true,
    description: "Master JavaScript development",
  },
];

export default function App() {
  const [goals, setGoals] = useState(initialGoals);
  const [filter, setFilter] = useState("all");

  function handleToggleCompleted(goal) {
    setGoals(
      goals.map(el =>
        el.id === goal.id ? { ...el, isCompleted: !el.isCompleted } : el
      )
    );
  }

  return (
    <div className="app">
      <Header filter={filter} setFilter={setFilter} />
      <GoalsList
        goals={goals}
        onToggleCompleted={handleToggleCompleted}
        filter={filter}
      />
      <Button>+</Button>
    </div>
  );
}
