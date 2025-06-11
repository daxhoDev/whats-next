export default function Header({ filter, setFilter }) {
  return (
    <header className="main-header">
      <select
        name="current-list"
        className="current-list"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      >
        <option value="all">All my goals</option>
        <option value="achieved">Achieved goals</option>
        <option value="pending">Pending goals</option>
      </select>

      {/* <img className="dropdown-icon" src="x"></img> */}
    </header>
  );
}
