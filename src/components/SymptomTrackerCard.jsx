import Trackers from "../pages/Trackers"
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { DeleteTracker, UpdateTrackers } from "../services/TrackerServices"
import { BASE_URL } from "../services/api"

const SymptomTrackerCard = (props) => {
const [showForm, setShowForm] = useState(false)
const initialState = {
    date: '',
    overallFeeling: '',
    hoursOfSleep: '',
    painLevel: '',
    flare: '',
    notes: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }



    const deleteTracker = async (e) => {
        e.preventDefault()
        await DeleteTracker(props.trackerId)
        console.log(props.trackerId)
        props.setToggle(!props.toggle)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let trackerId = props.trackerId
        console.log(trackerId)
        const response = await axios.put(
          `${BASE_URL}/tracker/${trackerId}`,
          formState,
          trackerId
        )
        console.log(response)
        props.setLatestTracker(response)
        setFormState(initialState)
        props.setTrackerExists(true)
        props.setToggle(!props.toggle)
      }

    const displayUpdateForm = async () => {
        setShowForm(showForm);
    }



    return (
        <div className="tracker-card">
            <h2 className="tracker-date">Date: {props.date} </h2>
            <h3 className="tracker-overall">Overall Feeling: {props.overallFeeling}</h3>
            <h3 className="tracker-sleep">Hours of Sleep: {props.hoursOfSleep} </h3>
            <h3 className="pain-level">Pain Level: {props.painLevel}</h3>
            <h3 className="flare"> Flare?: {props.flare}</h3>
            <h3 className="notes">Notes: {props.notes}</h3>
            <button className="schedule-button" onClick={(deleteTracker)}>Delete Tracker</button>
            {showForm ? ( <form onSubmit={handleSubmit}>
            <label className="label dateField" htmlFor="date">
            Date{' '}
          </label>
          <input
            className="input"
            type="text"
            id="date"
            placeholder="MM/DD/YY (Required)"
            cols="30"
            onChange={handleChange}
            value={formState.date}
            // required
          />
          <label className="label dateField" htmlFor="overallFeeling">
            How are you feeling overall?{' '}
          </label>
          <select
            onChange={handleChange}
            value={formState.overallFeeling}
            id="overallFeeling"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label className="label dateField" htmlFor="hoursOfSleep">
            How Many Hours of sleep did you get last night?{' '}
          </label>
          <select
            onChange={handleChange}
            value={formState.hoursOfSleep}
            id="hoursOfSleep"
          >
            <option value="1">1 hour</option>
            <option value="2">2 hours</option>
            <option value="3">3 hours</option>
            <option value="4">4 hours</option>
            <option value="5">5 hours</option>
            <option value="6">6 hours</option>
            <option value="7">7 hours</option>
            <option value="8">8 hours</option>
            <option value="9">9 hours</option>
            <option value="10">10+ hours</option>
          </select>
          <label className="label dateField" htmlFor="painLevel">
            How is your pain today?{' '}
          </label>
          <select
            onChange={handleChange}
            value={formState.painLevel}
            id="painLevel"
          >
            <option value="1">1 (No pain)</option>
            <option value="2">2 </option>
            <option value="3">3 </option>
            <option value="4">4 </option>
            <option value="5">5 (Severe pain)</option>
          </select>
          <label className="label dateField" htmlFor="flare">
            Are you having any flare symptoms?{' '}
          </label>
          <select onChange={handleChange} value={formState.flare} id="flare">
            <option value="No">No</option>
            <option value="Yes">Yes </option>
          </select>
          <label className="label dateField" htmlFor="notes">
            Use this space to write down any notes you may have. If you're feeling any flare symptoms make sure to document them here. {' '}
          </label>
          <textarea
            className="input"
            type="text"
            id="notes"
            placeholder="Notes here"
            cols="30"
            onChange={handleChange}
            value={formState.notes}
            required
          />
          <button className="create-tracker-button" type="submit">
            Update
          </button>
          <button className="create-tracker-button" type="submit" onClick={()=>setShowForm(false)}>Cancel</button>
          </form> ) : ( <button className="schedule-button" onClick={()=>setShowForm(true) }> Update Tracker</button>)}
        </div>
    )
}

export default SymptomTrackerCard
