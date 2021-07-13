import { useState, useEffect } from 'react';
import AddBountiesForm from './AddBountiesForm'
import Bounties5 from "./Bounties5"
import axios from 'axios';


function App() {

  const [bounties, setBounties] = useState([]);

  const getBounties = () => {
    axios.get ('/bounties/')
    .then(res => setBounties(res.data))
    .catch(err => console.log(err));
  };

  const AddBounties = (newBounties) => {
    axios.post ('/bounties', newBounties)
    .then(res =>{
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

  useEffect(() => {
    getBounties();
  }, []);





  return (
    <div className="bounties-container">
      <AddBountiesForm 
        submit={AddBounties}
        btnText="Add Bounty Here"
      />
      
      {bounties.map(bounty => <Bounties5{...bounty} key={bounty.type} deleteBounties={deleteBounties} updateBounties={updateBounties}/>)}
      
     
    </div>
  );
}

export default App;
