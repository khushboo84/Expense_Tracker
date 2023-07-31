import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import categories from "./categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpense] = useState([
    { id: 1, description: "Milk", amount: 5, category: "Groceries" },
  ]);
  if (expenses.length === 0) return null;

  const visible = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="m-5 container">
        <div className="row">
          <div className="col">
            <ExpenseForm
              onSubmit={(expense) =>
                setExpense([
                  ...expenses,
                  { ...expense, id: expenses.length + 1 },
                ])
              }
            />
          </div>
          <div className="col">
            <ExpenseFilter
              onSelectCategory={(category) => setSelectedCategory(category)}
            />

            <ExpenseList
              expenses={visible}
              onDelete={(id) => setExpense(expenses.filter((e) => e.id != id))}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
