export default function Backdrop({ onClick, children }) {
  return (
    <div
      className="backdrop"
      onClick={e => {
        if (e.target.className !== "backdrop") return;
        onClick();
      }}
    >
      {children}
    </div>
  );
}
