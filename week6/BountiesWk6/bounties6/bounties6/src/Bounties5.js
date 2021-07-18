import React,{useState} from 'react';
import AddBountiesForm from "./AddBountiesForm"


function Bounties5 (props){
    const {firstName,lastName,amount,_id} = props
    const [editInput, setEditInput] = useState(false);
    return (
        <div>
            {!editInput ?
            <>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
            <h2>{amount}</h2>
            <button onClick={()=> props.deleteBounties(_id)}>delete</button>
            <button onClick={()=> setEditInput(prevIn =>!prevIn)}>edit</button>
            </>
            :
            <>
            <AddBountiesForm
            firstName={firstName}
            lastName={lastName}
            amount={amount}
            _id={_id}
            submit={props.updateBounties}
            btnText= "submit update"/>
            <button onClick={()=> setEditInput(prevIn => !prevIn) }>update</button>
            </>
        }
        </div>
    )
}

export default Bounties5