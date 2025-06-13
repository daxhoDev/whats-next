import { useState } from "react";
import Header from "./Header";
import GoalsList from "./GoalsList";
import Backdrop from "./Backdrop";
import FormNewGoal from "./FormNewGoal";
import Sort from "./Sort";

const colors = [
  { name: "red", hex: "#e72d2d" },
  { name: "orange", hex: "#ff851a" },
  { name: "yellow", hex: "#ddd900" },
  { name: "green", hex: "#2bc02b" },
  { name: "cyan", hex: "#00c3d3" },
  { name: "blue", hex: "#3555ff" },
  { name: "pink", hex: "#ff64bf" },
];

export default function App() {
  const [goals, setGoals] = useState([]);

  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("last");

  const filteredGoals =
    filter === "achieved"
      ? goals.filter(el => el.isCompleted)
      : filter === "pending"
      ? goals.filter(el => !el.isCompleted)
      : goals;

  const sortedGoals =
    sortBy === "last"
      ? filteredGoals.slice().sort((a, b) => b.id - a.id)
      : sortBy === "description"
      ? filteredGoals
          .slice()
          .sort((a, b) => a.description.localeCompare(b.description))
      : filteredGoals.slice().sort((a, b) => a.color.localeCompare(b.color));

  const [isFormNewGoalOpen, setIsFormNewGoalOpen] = useState(false);

  function handleToggleCompleted(goal) {
    setGoals(
      goals.map(el =>
        el.id === goal.id ? { ...el, isCompleted: !el.isCompleted } : el
      )
    );
  }

  function handleAddNewGoal(newGoal) {
    setGoals([newGoal, ...goals]);
  }

  function handleToggleForm() {
    setIsFormNewGoalOpen(!isFormNewGoalOpen);
  }

  return (
    <div className="app">
      <Header filter={filter} setFilter={setFilter} />
      <GoalsList
        goals={goals}
        onToggleCompleted={handleToggleCompleted}
        sortedGoals={sortedGoals}
        colors={colors}
      />
      <Sort sortBy={sortBy} setSortBy={setSortBy} />
      <button className="button button-add-goal" onClick={handleToggleForm}>
        {isFormNewGoalOpen ? "-" : "+"}
      </button>
      {isFormNewGoalOpen && (
        <Backdrop onClick={handleToggleForm}>
          <FormNewGoal
            colors={colors}
            onAddNewGoal={handleAddNewGoal}
            onToggleForm={handleToggleForm}
          />
        </Backdrop>
      )}
    </div>
  );
}
