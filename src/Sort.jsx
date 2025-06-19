export default function Sort({ sortBy, setSortBy }) {
  return (
    <div className="sort">
      <svg
        className="sort-icon"
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 100 100"
        x="0px"
        y="0px"
      >
        <path d="M77,24H23a4,4,0,0,0,0,8H77a4,4,0,0,0,0-8Z" />
        <path d="M71,50a4,4,0,0,0-4-4H33a4,4,0,0,0,0,8H67A4,4,0,0,0,71,50Z" />
        <path d="M43,68a4,4,0,0,0,0,8H57a4,4,0,0,0,0-8Z" />
      </svg>
      <select
        id="sort-by"
        value={sortBy}
        onChange={e => setSortBy(e.target.value)}
      >
        <option value="last">Last added</option>
        <option value="description">Description</option>
        <option value="color">Color</option>
      </select>
    </div>
  );
}
