import React, { useState } from "react";

import "./Expenses.css";
import Card from "../../components/ui/Card";
import ExpenseCreate from "./create/ExpenseCreate";
import ExpensesFilter from "./filter/ExpensesFilter";
import ExpenseChart from "./chart/ExpenseChart";
import ExpenseList from "./list/ExpenseList";

function Expenses({expenses, addExpense}) {
    const [year, setYear] = useState('2020');

    const filter_expenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === year;
    });

    return (
        <>
            <ExpenseCreate addExpense={addExpense} />
            <Card className="expenses">
                <ExpensesFilter
                    selected={year}
                    onChangeFilter={ (selected)=>  setYear(selected) }
                />
                <ExpenseChart expenses={filter_expenses} />
                <ExpenseList expenses={filter_expenses} />
            </Card>
        </> 
    );
}

export default Expenses;