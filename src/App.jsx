import { useState } from "react";
import Header from "./Header";
import GoalsList from "./GoalsList";
import Backdrop from "./Backdrop";
import FormNewGoal from "./FormNewGoal";

const colors = [
  { name: "red", hex: "#e72d2d" },
  { name: "orange", hex: "#ff851a" },
  { name: "yellow", hex: "#fffb00" },
  { name: "green", hex: "#2bc02b" },
  { name: "cyan", hex: "#00e2f7" },
  { name: "blue", hex: "#3555ff" },
  { name: "pink", hex: "#ff64bf" },
];

export default function App() {
  const [goals, setGoals] = useState([]);
  const [filter, setFilter] = useState("all");
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
        filter={filter}
        colors={colors}
      />
      <button
        className="button button-add-goal"
        onClick={() => handleToggleForm()}
      >
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
