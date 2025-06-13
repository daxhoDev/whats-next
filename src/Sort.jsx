export default function Sort({ sortBy, setSortBy }) {
  return (
    <div className="sort">
      <label htmlFor="sort-by">Sort by</label>
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
