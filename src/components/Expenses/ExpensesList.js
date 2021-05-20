import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {

    // condition to render filtered expenses
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses</h2>
    }

    return <ul className='expenses-list'>
        {props.items.map((expenseItem) => (
            <ExpenseItem
                key={expenseItem.id}
                title={expenseItem.title}
                amount={expenseItem.amount}
                date={expenseItem.date}
            />
        )
        )}
    </ul>
};

export default ExpensesList;