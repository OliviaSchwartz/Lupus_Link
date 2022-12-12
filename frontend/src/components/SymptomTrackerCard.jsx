import Trackers from "../pages/Trackers"

const SymptomTrackerCard = (props) => {
    return (
        <div className="tracker-card">
            <h3 className="tracker-date">Date: {props.date} </h3>
            {/* <button onClick={props.viewOnClick}>View Tracker Details</button> */}
        </div>
    )
}

export default SymptomTrackerCard
