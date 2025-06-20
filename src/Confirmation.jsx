import Button from "./Button";

export default function Confirmation({
  onToggleConfirmation,
  onRemoveGoal,
  openGoal,
}) {
  return (
    <div className="confirmation modal">
      <h3 className="confirmation__message">Are you sure?</h3>
      <div className="confirmation__buttons">
        <Button
          className="buttons__option buttons__option--yes"
          onClick={() => onRemoveGoal(openGoal)}
        >
          Yes
        </Button>
        <Button
          className="buttons__option buttons__option--no"
          onClick={onToggleConfirmation}
        >
          No
        </Button>
      </div>
    </div>
  );
}
