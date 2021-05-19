import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2020');

    const filterChangeHandler = (filteredYear) => {
        setSelectedYear(filteredYear)
    };

    // new filtered array returned
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear
    });

    return (
        <div>

            <Card className='expenses'>
                <ExpenseFilter
                    onFilter={filterChangeHandler}
                    selected={selectedYear}
                />
                {filteredExpenses.map((expenseItem) => {
                    return (
                        <ExpenseItem
                            key={expenseItem.id}
                            title={expenseItem.title}
                            amount={expenseItem.amount}
                            date={expenseItem.date}
                        />
                    )
                })}

            </Card>
        </div>
    )
}

export default Expenses;