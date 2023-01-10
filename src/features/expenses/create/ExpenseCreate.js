
import React, { useState } from "react";

import "./ExpenseCreate.css";
import ExpenseForm from "./ExpenseForm";

function ExpenseCreate({ addExpense }) {

    const [isEditing, setIsEditing] = useState(false);

    function onSubmitForm(form) {
        addExpense(form)
    }

    return (
        <div className='new-expense'>
            {!isEditing && (
                <button onClick={ ()=>  setIsEditing(true) }>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm 
                    onSubmitForm={onSubmitForm}
                    onCancelForm={ ()=>  setIsEditing(false) }
                />
            )}
        </div>
    );
}

export default ExpenseCreate;