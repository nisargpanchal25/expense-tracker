function ExpenseFilter({ onMonthChange, onCategoryChange }) {
  return (
    <div className="filter-bar">
      <select
        className="input-field"
        onChange={(e) => onMonthChange(e.target.value)}
      >
        <option value="All">All Months</option>
        <option value="0">January</option>
        <option value="1">February</option>
        <option value="2">March</option>
        <option value="3">April</option>
        <option value="4">May</option>
        <option value="5">June</option>
        <option value="6">July</option>
        <option value="7">August</option>
        <option value="8">September</option>
        <option value="9">October</option>
        <option value="10">November</option>
        <option value="11">December</option>
      </select>

      <select
        className="input-field"
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Rent">Rent</option>
        <option value="Shopping">Shopping</option>
        <option value="Health">Health</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
