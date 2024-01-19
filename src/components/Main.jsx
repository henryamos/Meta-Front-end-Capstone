import React, { useReducer } from 'react'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Booking from './Booking'
import Header from './Header';
import ConfirmedBooking from './ConfirmedBooking'

const Main = () => {
 const seedRandom= function(seed){
    var m  = 2**35 -31;
    var a =185852;
    var s = seed  % m;
    return function(){
        return(s = s * a % m)/m;
    }
 }

    const fetchAPI = function(date){
        let result = []
        let random= seedRandom(date.getDate());
        for(let i =17 ; i <=23; i++){
          result.push(i + ":00");
          result.push(i + ":30");
        }
        return result.filter(() => random() < 0.5); // Filter based on random value
      }

    
    const submitAPI = function(formData){
        return true;
    }
    const initialState = {availableTimes: fetchAPI(new Date ())}
    const [state,dispatch] = useReducer(updateTimes,initialState)
 
  function updateTimes(state, date){
    return{availableTimes: fetchAPI(new Date())}
  }
  const navigate = useNavigate();

  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }
  
    return (
    <div>
      <main>
        <Routes>
            <Route path="/" element={<Header/>} />
            <Route path="/booking" 
            element={<Booking availableTimes={state}
             dispatch={dispatch}
             submitForm={submitForm}
             />} />
            <Route path='/confirmed' element={<ConfirmedBooking/>}/>
        </Routes>
      </main>
     </div>
  )
}

export default Main
