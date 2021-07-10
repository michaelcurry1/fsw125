import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [bounties, setBounties] = useState([]);

  const getBounties = () => {
    axios.get ('/bounties')
    .then(res => setBoumties(res.data))
    .catch(err => console.log(err));
  };

  const addBounties = (newBounties) => {
    axios.post ('/bounties', newBounties)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  };
  useEffect(() => {
    getBounties();
  }, []);

  const bountiesList = bounties.map(bounties => <Bounties{...bounties} key={bounties.type}/>)



  return (
    <div className="bounties-container">
      <addBountiesForm/>
      {bountiesList}
      
     
    </div>
  );
}

export default App;
