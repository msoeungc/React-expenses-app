import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    // 3 separate states
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // object used to merge the states into one state
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // if state update depends on prev state use this function form
        // setUserInput((prevState) => {
        //     // call function and pass prevState, return prev state with spread operator uses data from previous state (old object) and adds to new object (new state), then you overwite enteredTitle property with event.target.value
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredAmount: event.target.value
        //     };
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredDate: event.target.value
        //     };
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input onChange={titleChangeHandler} type='text' value={enteredTitle} />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input onChange={amountChangeHandler} type='number' min="0.01" step="0.01" value={enteredAmount} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input onChange={dateChangeHandler} type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
                <button type='button' onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
    )
}

export default ExpenseForm;