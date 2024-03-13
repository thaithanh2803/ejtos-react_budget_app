import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, remaining, currency, dispatch } = useContext(AppContext);
    //const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {  
        const newbudget = parseInt(event.target.value)
        const totalExpense = budget - remaining
        //setNewBudget(event.target.value);
        if (newbudget < totalExpense) {
            alert("You cannot reduce the budget value lower than the spending" + parseInt(budget - remaining));
            return;

        } 
        else if (newbudget > 20000) {
            alert("The value cannot exceed £20000");
            return;

        }   
        else {
            dispatch({
                type: 'SET_BUDGET',
                payload: newbudget,
            })
        }   
    
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={budget} min={budget - remaining} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
