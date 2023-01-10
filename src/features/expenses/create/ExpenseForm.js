import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm({ onSubmitForm, onCancelForm }) {
    const [form, setForm] = useState({
        title: "",
        amount: "",
        date: ""
    });

    function changeInput(event, field) {

        setForm((prevState) => {
            prevState[field] = event.target.value;
            return { ...prevState };
        });
    }

    function submitForm(event) {
        event.preventDefault();

        onSubmitForm({ ...form, date: new Date(form.date) });

        setForm({
            title: "",
            amount: "",
            date: ""
        });
    }

    return (
        <form onSubmit={submitForm}>
          <div className='new-expense__controls'>
            <div className='new-expense__control'>
              <label>Title</label>
              <input
                type='text'
                value={ form.title }
                onChange={ (event) => changeInput(event, 'title')  }

              />
            </div>
            <div className='new-expense__control'>
              <label>Amount</label>
              <input
                type='number'
                min='0.01'
                step='0.01'
                value={ form.amount }
                onChange={ (event) => changeInput(event, 'amount')  }
              />
            </div>
            <div className='new-expense__control'>
              <label>Date</label>
              <input
                type='date'
                min='2019-01-01'
                value={ form.date }
                onChange={ (event) => changeInput(event, 'date')  }
              />
            </div>
          </div>
          <div className='new-expense__actions'>
            <button type="button" onClick={ onCancelForm }>Cancel</button>
            <button type='submit'>Add Expense</button>
          </div>
        </form>
    );
}

export default ExpenseForm;