import React,{useState} from 'react'

const BookingForm = (props) => {
    const[date, setDate]= useState("")
    const[times,setTimes]=useState("")
    const[guests,setGuests]=useState("")
    const[occasion,setOccasion]=useState("")
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        props.submitForm(e)
    }

    const handleChange=(e)=>{
        setDate(e)
        props.dispatch(e)
    }
  return (
    <div>
       <header>
        <section>
            <form action="" onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor='book-date'>Choose Date</label>
                        <input 
                        id='book-date' 
                        value={date} 
                        type="date" 
                        onChange={(e) => handleChange(e.target.value)}
                        required />
                    </div>
                    {/* For Time Selection */}
                    <div>
                    <label htmlFor='book-time'>Choose Time</label>
                        <select 
                        name=""
                        value={times}
                        onChange={(e) => setTimes(e.target.value)}
                        id="book-time">
                            <option value="">Select Time</option>
                            {
                                props.availableTimes.availableTimes.map(availableTimes=>{
                                    return <option key={availableTimes}>{availableTimes}</option>
                                })
                            }
                        </select>
                    </div>
                    {/* For Guest */}
                    <div>
                    <label htmlFor='book-guests'>Number of Guests:</label>
                    <input 
                    id='book-guests'
                    min='1'
                    max='10'
                    type='number'
                    value={guests}
                    onChange={(e)=>setGuests(e.target.value)}
                    />
                    </div>

                    {/*Occasion Fiedl  */}
                    <div>
                    <label htmlFor='book-occasion'>Occasion:</label>
                     <select name="" 
                     id="book-occasion" 
                     key={occasion}
                     value={occasion}
                     onChange={e => setOccasion(e.target.value)}
                     >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                     </select>
                    </div>
                    {/* Submit Button*/}
                    <div className="btnReceive">
                        <input aria-label='On Click'
                        type='submit'
                        value={"Make Your Reservation"}
                        name="" id="" />
                    </div>

                </fieldset>
            </form>
        </section>
       </header>
    </div>
  )
}

export default BookingForm
