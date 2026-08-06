function ExpenseItem({ expense, onDelete, onEdit }) {
  const formattedDate = expense.date
    ? new Date(expense.date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "No date";

  return (
    <li className="expense-item">
      <div className="expense-meta">
        <h4>{expense.title}</h4>
        <p>
          {expense.category} | {formattedDate}
        </p>
      </div>

      <div className="expense-actions">
        <span className="expense-amount">Rs {expense.amount}</span>
        <button className="btn btn-ghost" onClick={() => onEdit(expense)}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(expense.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default ExpenseItem;
