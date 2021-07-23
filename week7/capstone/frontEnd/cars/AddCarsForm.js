import {useState} from 'react';


function AddBountiesForm(props){ 

    const initialInputs = {type:"" || props.type, amount:"", firstName:"", lastName:""};
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
            name="firstName"
            value={inputs.firstName}
            onChange={handleChange }
            placeholder="firstName"/>

<input
            type="text"
            name="lastName"
            value={inputs.lastName}
            onChange={handleChange }
            placeholder="lastName"/>

            <label>sith</label>
            <input
            type="radio"
            name="type"
            value="sith"
            checked={inputs.type==="sith"}
            onChange={handleChange }
            placeholder="Type"/>

            
            <label>jedi</label>
            <input
            type="radio"
            name="type"
            value="jedi"
            checked={inputs.type==="jedi"}
            onChange={handleChange }
            placeholder="Type"/>



            <input
            type='text'
            name='amount'
            value={inputs.amount}
            onChange={handleChange }
            placeholder='Amount'/>

            {/* <h1>Are they human?</h1> */}

           {/*  <input type= "radio" 
                    name= "human"
                    value= "true"
                    onChange={handleChange }
            ></input> 

              <input type= "radio" 
                    name= "human"
                    value= "false"
                    onChange={handleChange }
                    
            ></input> */}


           
            <button>Add Bounty{props.btnText}</button>
        </form>
    )
}

export default AddBountiesForm;