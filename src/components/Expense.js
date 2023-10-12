import React, {useState} from "react";

import ExpenseFilter from "./ExpenseFilter";
// import Expenseitem from "./Expenseitem";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expense(props){

    const[filteredYear, setFilterYear] = useState('2020');

    // let filteredInfoText = ' 2019, 2021 & 2022'; //computed value , a value we derieved on the basis of state   
    // if(filteredYear == '2019')
    //  filteredInfoText = ' 2020, 2021 & 2022';
    // else if(filteredYear === '2021'){
    //     filteredInfoText = ' 2019, 2020 & 2022';
    // }else{
    //     filteredInfoText = ' 2019, 2020 & 2021';
    // }
   
    const FilterCHangeHandler = (ExpenseYear)=>{
        setFilterYear(ExpenseYear);
    } 

    const filteredExpenses =  props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });

  
    
    
    //when state is called the components will resexecute so all the code will be rexecuted and will derive a new vaue 
    
    return(  
        <div>
            <ExpenseFilter selected = {filteredYear} onChangeFilter = {FilterCHangeHandler}/>
            {/* <p>data for years {filteredInfoText} id Hidden</p>
   */}
              <ExpensesChart expenses={filteredExpenses}/>
             <ExpensesList  items ={filteredExpenses}/> 
     {/* <div>
            <Expenseitem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}> </Expenseitem>
            <Expenseitem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}> </Expenseitem>
            <Expenseitem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}> </Expenseitem>
            <Expenseitem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}> </Expenseitem>
            // </div> */}
             {/* //hardcodec data removed */}

            </div>
            );
    }

      



export default Expense;


/////////////////////////////--------------------------//////////////////////////////
// import { Component } from "react";
// class Expense extends Component{
//     constructor(props){
//         //super initialises the base class of the components libraray
//         super(props)
//         this.state = {
//             //initial state set kr dia 
//             filteredYear : 2020,
//         };
//     }

//     FilterCHangeHandler = (ExpenseYear)=>{
//              this.setState({filteredYear: ExpenseYear})
//     }


//     render(){
//         return(

//         );
//     }
// }