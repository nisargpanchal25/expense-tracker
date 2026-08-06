function ExpenseSummary({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="summary-card">
      <h3>Total Spent</h3>
      <p className="summary-amount">Rs {total}</p>
    </div>
  );
}

export default ExpenseSummary;
