import { useState } from "react";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";
import ExpenseFilter from "./Components/ExpenseFilter";
import ExpenseSummary from "./Components/ExpenseSummary";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editExpense, setEditExpense] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  function addOrUpdateExpense(expense) {
    if (editExpense) {
      setExpenses((prev) =>
        prev.map((item) => (item.id === editExpense.id ? expense : item))
      );
      setEditExpense(null);
    } else {
      setExpenses((prev) => [...prev, expense]);
    }
  }

  function deleteExpense(id) {
    setExpenses((prev) => prev.filter((item) => item.id !== id));
  }

  function startEditExpense(expense) {
    setEditExpense(expense);
  }

  let filteredExpenses = expenses;

  if (selectedMonth !== "All") {
    filteredExpenses = filteredExpenses.filter(
      (e) => e.date.getMonth().toString() === selectedMonth
    );
  }

  if (selectedCategory !== "All") {
    filteredExpenses = filteredExpenses.filter(
      (e) => e.category === selectedCategory
    );
  }

  return (
    <main className="app-shell">
      <section className="app-card">
        <header className="app-header">
          <p className="app-kicker">Personal Finance</p>
          <h1>Monthly Expense Tracker</h1>
        </header>

        <ExpenseForm
          onSaveExpense={addOrUpdateExpense}
          editExpense={editExpense}
        />

        <ExpenseFilter
          onMonthChange={setSelectedMonth}
          onCategoryChange={setSelectedCategory}
        />

        <ExpenseSummary expenses={filteredExpenses} />

        <ExpenseList
          expenses={filteredExpenses}
          onDelete={deleteExpense}
          onEdit={startEditExpense}
        />
      </section>
    </main>
  );
}

export default App;
