import {useState} from 'react';


function AddCarsForm(props){ 

    const initialInputs = {type:"" || props.type, amount:"", make:"", model:""};
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
            name="make"
            value={inputs.firstName}
            onChange={handleChange }
            placeholder="make"/>

<input
            type="text"
            name="model"
            value={inputs.lastName}
            onChange={handleChange }
            placeholder="model"/>



            <input
            type='text'
            name='amount'
            value={inputs.amount}
            onChange={handleChange }
            placeholder='Amount'/>

          

           
            <button>Add Car{props.btnText}</button>
        </form>
    )
}

export default AddCarsForm;