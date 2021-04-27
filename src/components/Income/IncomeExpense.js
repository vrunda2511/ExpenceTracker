import React,{useContext} from 'react'
import {Globalcontext} from '../../context/Globalcontext'

export const IncomeExpense=()=>{
    const {transection}=useContext(Globalcontext);

    const amounts = transection.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);


    return(
        
        <div className="inc-exp-container">
            <div>
                <h4 className="income-title">Income</h4>
                <p className="money plus">{income}</p>
            </div>
            <div>
                <h4 className="expense-title">Expense</h4>
                <p className="money minus">{expense}</p>
            </div>
           
        </div>
      
    )
}