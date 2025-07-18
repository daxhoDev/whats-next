export default function Backdrop({ onClick, className, children }) {
  return (
    <div
      className={`backdrop ${className}`}
      onClick={e => {
        if (!e.target.classList.contains("backdrop")) return;
        onClick();
      }}
    >
      {children}
    </div>
  );
}
