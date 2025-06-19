export default function Header({ filter, setFilter }) {
  return (
    <header className="main-header">
      <div className="filter">
        <svg
          className="filter-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 26"
          fill="none"
          x="0px"
          y="0px"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.1155 3.53346C2.28857 3.20535 2.62904 3 3 3H21C21.371 3 21.7114 3.20535 21.8845 3.53346C22.0576 3.86157 22.0348 4.25853 21.8253 4.56468L15.5 13.8094V19.5C15.5 19.8788 15.286 20.225 14.9472 20.3944L9.94722 22.8944C9.63723 23.0494 9.26909 23.0329 8.97427 22.8507C8.67945 22.6684 8.5 22.3466 8.5 22V13.8094L2.1747 4.56468C1.96522 4.25853 1.94244 3.86157 2.1155 3.53346ZM4.89588 5L10.3253 12.9353C10.4391 13.1016 10.5 13.2985 10.5 13.5V20.382L13.5 18.882V13.5C13.5 13.2985 13.5609 13.1016 13.6747 12.9353L19.1041 5H4.89588Z"
            fill="black"
          />
        </svg>
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
      </div>

      {/* <img className="dropdown-icon" src="x"></img> */}
    </header>
  );
}
