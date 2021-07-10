import {useState} from 'react';
import addBountiesForm from './addBountiesForm'

function addBountiesForm({addBounties}){ 

    const initialInputs = {type:'', amount:''};
    const [inputs, setInputs] = useState(initInputs);

    const handleChange = (e) =>{
        const{name, value} = e.target;
        setInputs(prevInputs =>({...prevInputs,[name]:value}))
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        setInputs(initialinputs);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            name='type'
            value={inputs.type}
            onChange={handleChange }
            placeholder='Type'/>


            <input
            type='text'
            name='amount'
            value={inputs.amount}
            onChange={handleChange }
            placeholder='Amount'/>
            <button>Add Bounty</button>
        </form>
    )
}

export default addBountiesForm;