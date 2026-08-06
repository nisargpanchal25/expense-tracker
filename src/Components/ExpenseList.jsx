import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDelete, onEdit }) {
  if (expenses.length === 0) {
    return <p className="empty-state">No expenses found.</p>;
  }

  return (
    <ul className="expense-list">
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          expense={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
