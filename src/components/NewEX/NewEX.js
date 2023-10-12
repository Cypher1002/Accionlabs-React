import React, {useState} from "react";
import './NewEX.css';
import ExpenseForm from "./ExpenseForm";

const NewEX = (props) =>{

  const[edit, setEdit] =  useState(false);

   const saveExpenseData = (enterExpenseData)=>{
      const expenseData = {
         ...enterExpenseData ,///this will represent the object in expenseform where info is stored in onj format
         id: Math.random().toString()
      };
      props.onAddExpense(expenseData);
      setEdit(false);
   };
      const startEdit =()=>{
            setEdit(true);
      };
      const stoppEdit = ()=>{
         setEdit(false);
      }
   
   return(
   
            <div  className="new-expense">
               {!edit&&<button onClick={startEdit}>add nw expense </button>}
               {!edit&&<ExpenseForm onSaveExpenseData={saveExpenseData} onCancle={stoppEdit}/>}
            </div>
        
   );
}

export default NewEX;