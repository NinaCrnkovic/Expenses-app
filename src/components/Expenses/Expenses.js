import React, { useState } from "react";

import Card from "../UI/Card";

import ExpenseFilter from "./ExpenseFilter";
import ExspensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";

import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExspensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
