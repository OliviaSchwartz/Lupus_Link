import Trackers from "../pages/Trackers"
import { DeleteTracker } from "../services/TrackerServices"

const SymptomTrackerCard = (props) => {

    const deleteTracker = async (e) => {
        e.preventDefault()
        await DeleteTracker(props.trackerId)
        console.log(props.trackerId)
        props.setToggle(!props.toggle)
    }

    return (
        <div className="tracker-card">
            <h2 className="tracker-date">Date: {props.date} </h2>
            <h3 className="tracker-overall">Overall Feeling: {props.overallFeeling}</h3>
            <h3 className="tracker-sleep">Hours of Sleep: {props.hoursOfSleep} </h3>
            <h3 className="pain-level">Pain Level: {props.painLevel}</h3>
            <h3 className="flare"> Flare?: {props.flare}</h3>
            <h3 className="notes">Notes: {props.notes}</h3>
            <button className="schedule-button" onClick={() => props.onClick(props.id)}> Update Tracker</button>
            <button className="schedule-button" onClick={(deleteTracker)}>Delete Tracker</button>

        </div>
    )
}

export default SymptomTrackerCard
