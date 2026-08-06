import { useEffect, useState } from "react";

function ExpenseForm({ onSaveExpense, editExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Food");

  useEffect(() => {
    if (editExpense) {
      setTitle(editExpense.title);
      setAmount(editExpense.amount);
      setDate(editExpense.date.toISOString().slice(0, 10));
      setCategory(editExpense.category);
    }
  }, [editExpense]);

  function handleSubmit(e) {
    e.preventDefault();

    const expenseData = {
      id: editExpense ? editExpense.id : Date.now(),
      title,
      amount: +amount,
      date: new Date(date),
      category,
    };

    onSaveExpense(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
    setCategory("Food");
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        className="input-field"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        className="input-field"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <input
        className="input-field"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <select
        className="input-field"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Food</option>
        <option>Transport</option>
        <option>Rent</option>
        <option>Shopping</option>
        <option>Health</option>
      </select>

      <button className="btn btn-primary">
        {editExpense ? "Update Expense" : "Add Expense"}
      </button>
    </form>
  );
}

export default ExpenseForm;
