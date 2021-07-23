import { useState, useEffect } from 'react';
import AddBountiesForm from './AddBountiesForm'
import Bounties5 from "./Bounties5"
import axios from 'axios';


function App() {

  const [bounties, setBounties] = useState([]);
  const[typeValue, setTypeValue] = useState("");

  const arrTypes= [
    {
      value:"sith",
      label:"sith"

    },

    {
      value:"jedi",
      label:"jedi"
    },

    {
      value:"all",
      label:"all"
    }
  ]

  const getBounties = () => {
    axios.get ('/bounties/')
    .then(res => setBounties(res.data))
    .catch(err => console.log(err));
  };

  const AddBounties = (newBounties) => {
    axios.post ('/bounties', newBounties)
    .then(res =>{
      console.log(res)
      setBounties(prevbounties =>[...prevbounties, res.data])
     
    })
   .catch(err => console.log(err));
  };

  const deleteBounties = (bountyId) => {
    axios.delete (`/bounties/${bountyId}`)
    .then(res =>{
      setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
    })
    .catch(err => console.log(err))
  };

  const updateBounties = (bountyId, updates) => {
    axios.put(`/bounties/${bountyId}`,updates)
    .then(res =>{
      setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
    })
  }

  function filterArr(e){
    const filterArr= typeValue

    filterArr==="all" ? getBounties(): axios.get(`/bounties/bounty?type=${filterArr}`)
    .then(res => setBounties(res.data))
  }

  useEffect(() => {
    getBounties();
  }, []);

  const handleChange = (e) =>{
    const{name, value} = e.target;
    setTypeValue((value))
}





  return (
    <div className="bountiesContainer">
      <div style={{background:"brown",width:"100vw"}}>
      <AddBountiesForm 
        submit={AddBounties}
        btnText="Add Bounty Here"
      />
      <input onChange= {handleChange}></input>
      <button onClick= {filterArr}>filter</button>
      </div>
      <div style={{background:"blue",width:"100vw"}} className="centerList">

      {bounties.map((bounty, index) =>
         <Bounties5{...bounty} key={index} deleteBounties={deleteBounties} updateBounties={updateBounties}/>)}
      </div>
     
    </div>
  );
}

export default App;
