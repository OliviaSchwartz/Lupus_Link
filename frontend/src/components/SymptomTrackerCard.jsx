import Trackers from "../pages/Trackers"

const SymptomTrackerCard = (props) => {
    return (
        <div className="tracker-card">
            <h3 className="tracker-date">Date: {props.date} </h3>
            <h3 className="tracker-overall">How You're Feeling Overall: {props.overallFeeling}</h3>
            <h3 className="pain-level">What is your pain level today? {props.painLevel}</h3>
            <button className="exhibit-button" onClick={() => props.onClick(props.id)}> View Full Tracker</button>

        </div>
    )
}

export default SymptomTrackerCard
