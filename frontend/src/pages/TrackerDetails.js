import { GetOneTracker } from '../services/TrackerServices'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Trackers from './Trackers'

const TrackerDetails = ({
  user,
  authenticated,
  setTracker,
  tracker,
  setTrackerExists
}) => {
  return (
    <div>
      <h1>this is tracker info </h1>
    </div>
  )
}

export default TrackerDetails
