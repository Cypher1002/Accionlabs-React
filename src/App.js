import React, {Component, useState} from 'react';
import './App.css';
import Expense from './components/Expense';
import NewEX from './components/NewEX/NewEX';



const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

 const[expenses, setExpenses] = useState(DUMMY_DATA)

  const addExpenseHandler = (expense)=>{
    //prevexpenses will giv prev data automatically 
       setExpenses((prevExpenses) =>{
        return[expense, ...prevExpenses]
       });
    };

  return (
    <div>
      <NewEX  onAddExpense = {addExpenseHandler}/>
      {/* <Expenseitem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}> </Expenseitem>
      <Expenseitem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}> </Expenseitem>
      <Expenseitem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}> </Expenseitem>
      <Expenseitem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}> </Expenseitem> */}
      <Expense  items={expenses}/>
    </div>
  );
}

export default App;
//////////////////////////--------------------//////////////////////////////////////
//class based 
// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       Expense : DUMMY_DATA,
//     };
//     }

//     addExpenseHandler = (expense)=>{
//         this.setState((prevState)=>{
//           return { expenses : [expense, ...prevState.expenses]};
//         });
//     };

//     render(){
//       retrun (
//         <div>
//                   <NewEX  onAddExpense = {this.addExpenseHandler}/>
//         <Expense  items={ this.state.expenses}/>
//         </div>

//       );
//     }
//   }
// export default App;