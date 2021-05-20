import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isAddForm, setIsAddForm] = useState(false)


    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);

    };

    const showForm = () => {
        setIsAddForm(true);
    }

    const cancelForm = () => {
        setIsAddForm(false);
    }


    return (
        <div className='new-expense'>
            {isAddForm ? <ExpenseForm
                onCancel={cancelForm}
                onSaveExpenseData={saveExpenseDataHandler}
            /> : <button onClick={showForm}>Add New Expense</button>}
        </div>
    )
};

export default NewExpense;