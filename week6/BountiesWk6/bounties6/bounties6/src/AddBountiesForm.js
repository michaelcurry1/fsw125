import {useState} from 'react';


function AddBountiesForm(props){ 

    const initialInputs = {type:"", amount:""};
    const [inputs, setInputs] = useState(initialInputs);

    const handleChange = (e) =>{
        const{name, value} = e.target;
        setInputs(prevInputs =>({...prevInputs,[name]:value}))
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.submit(inputs, props._id)
        setInputs(initialInputs);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="type"
            value={inputs.type}
            onChange={handleChange }
            placeholder="Type"/>


            <input
            type='text'
            name='amount'
            value={inputs.amount}
            onChange={handleChange }
            placeholder='Amount'/>
            <button>Add Bounty{props.btnText}</button>
        </form>
    )
}

export default AddBountiesForm;