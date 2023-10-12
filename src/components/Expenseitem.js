import React from 'react';
import ExpenseDate from './ExpenseDate';
import './Expenseitem.css'

function Expenseitem(props){
    //  const [title,setTitle]= useState(props.title);

    // const clickHandler = ()=>{
    //     setTitle('updated!');
    //     console.log(title);
    // }
   
    // const expenseDate = new Date(2023, 9,16 );
    // const expenseTitle = "car insurance";
    // const expenseAmount = 294.67;

    return(
        <div className='expense-item'>
            <ExpenseDate  date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );
}

export default Expenseitem;