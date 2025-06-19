import { useState } from "react";

export default function FormNewGoal({ colors, onAddNewGoal, onToggleForm }) {
  const [selectedColor, setSelectedColor] = useState("red");
  const [description, setDescription] = useState("");

  return (
    <form
      className="form-new-goal"
      onSubmit={e => {
        e.preventDefault();
        if (!description) return;
        const newGoal = {
          id: Date.now(),
          isCompleted: false,
          description,
          color: selectedColor,
        };
        onAddNewGoal(newGoal);
        onToggleForm();
      }}
    >
      <h2 className="title">ADD A NEW GOAL</h2>
      <label htmlFor="description" className="label-description">
        Description
      </label>
      <input
        id="description"
        className="input-description"
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
      ></input>
      <div className="colors">
        {colors.map(col => (
          <div
            className={`color ${selectedColor === col.name ? "selected" : ""}`}
            key={col.name}
            onClick={() => setSelectedColor(col.name)}
            style={{
              backgroundColor: col.hex,
            }}
          ></div>
        ))}
      </div>
      <button className="button button-submit-goal">Add</button>
    </form>
  );
}
