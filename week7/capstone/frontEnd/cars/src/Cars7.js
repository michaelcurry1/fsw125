import React,{useState} from 'react';
import AddCarsForm from "./AddCarsForm"


function Cars7 (props){
    const {make,model,amount,type,_id} = props
    const [editInput, setEditInput] = useState(false);
    return (
        <div>
            {!editInput ?
            <>
            <h1>{make}</h1>
            <h1>{model}</h1>
            <h2>{amount}</h2>
            <h3>{type}</h3>
            <button onClick={()=> props.deleteCars(_id)}>delete</button>
            <button onClick={()=> setEditInput(prevIn =>!prevIn)}>edit</button>
            </>
            :
            <>
            <AddCarsForm
            firstName={make}
            lastName={model}
            amount={amount}
            type={type}
            _id={_id}
            submit={props.updateCars}
            btnText= "submit update"/>
            <button onClick={()=> setEditInput(prevIn => !prevIn) }>update</button>
            </>
        }
        </div>
    )
}

export default Cars7