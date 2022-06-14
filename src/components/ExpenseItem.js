import './ExpenseItem.css'

function ExpenseItem(props) {
  const expenseDate = new Date(2022, 6, 14);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67; 
    
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
