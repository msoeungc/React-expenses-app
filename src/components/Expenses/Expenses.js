import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2020');

    const filterChangeHandler = (filteredYear) => {
        setSelectedYear(filteredYear)
    };

    // new filtered array returned
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear;
    });


    return (
        <div>

            <Card className='expenses'>
                <ExpenseFilter
                    onFilter={filterChangeHandler}
                    selected={selectedYear}
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList 
                items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;