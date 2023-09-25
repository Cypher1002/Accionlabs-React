import './ExpenseDate.css'

function ExpenseDate(props){
    const month =  props.date.toLocaleString('en-US',{month: 'long'});
    const  day =  props.date.toLocaleString('en-US',{month: '2-digit'});
    const year =  props.date.getFullYear('en-US',{month: 'long'});
    
    return(
        <div  className='expense-date'>
            <div  className='expense-month__month'>{month}</div>
            <div  className='expense-year__year'>{year}</div>
            <div  className='expense-day__day'>{day}</div>
        </div>
    );
   

}
export default ExpenseDate;