import { useState, useEffect } from 'react';
import AddCarsForm from './AddCarsForm'
import Cars7 from "./Cars7"
import axios from 'axios';


function App() {

  const [cars, cars] = useState([]);
  const[typeValue, setTypeValue] = useState("");

  const arrTypes= [
    {
      value:"mustang",
      label:"mustang"

    },

    {
      value:"camaro",
      label:"camaro"
    },

    {
      value:"all",
      label:"all"
    }
  ]

  const getCars = () => {
    axios.get ('/cars/')
    .then(res => setCars(res.data))
    .catch(err => console.log(err));
  };

  const AddCars = (newCars) => {
    axios.post ('/cars', newCars)
    .then(res =>{
      console.log(res)
      setCars(prevcars =>[...prevcars, res.data])
     
    })
   .catch(err => console.log(err));
  };

  const deleteCars = (carId) => {
    axios.delete (`/cars/${carId}`)
    .then(res =>{
      setCars(prevCars => prevCars.filter(car => car._id !== carId))
    })
    .catch(err => console.log(err))
  };

  const updateCars = (carId, updates) => {
    axios.put(`/cars/${carId}`,updates)
    .then(res =>{
      setBounties(prevCars => prevCars.map(car => car._id !== carId ? car : res.data))
    })
  }

  function filterArr(e){
    const filterArr= typeValue

    filterArr==="all" ? getCars(): axios.get(`/cars/car?type=${filterArr}`)
    .then(res => setCars(res.data))
  }

  useEffect(() => {
    getCars();
  }, []);

  const handleChange = (e) =>{
    const{name, value} = e.target;
    setTypeValue((value))
}





  return (
    <div className="carsContainer">
      <div style={{background:"brown",width:"100vw"}}>
      <AddCarsForm 
        submit={AddCars}
        btnText="Add Car Here"
      />
      <input onChange= {handleChange}></input>
      <button onClick= {filterArr}>filter</button>
      </div>
      <div style={{background:"blue",width:"100vw"}} className="centerList">

      {cars.map((car, index) =>
         <Cars7{...car} key={index} deleteCars={deleteCars} updateCars={updateCars}/>)}
      </div>
     
    </div>
  );
}

export default App;
