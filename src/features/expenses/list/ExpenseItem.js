// import React, { useState } from "react";

import "./ExpenseItem.css";
import Card from "../../../components/ui/Card";
import ExpenseDate from "./ExpenseDate";


function ExpenseItem({ expense }) {
   
    return ( 
       <Card className="expense-item">
            <ExpenseDate date={ expense.date} />
            <div className="expense-item__description">
                <h2>{ expense.title }</h2>
                <div className="expense-item__price">${ expense.amount }</div>
            </div>
       </Card>
    );
}

export default ExpenseItem;