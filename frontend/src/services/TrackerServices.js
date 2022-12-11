import Client from './api'

export const GetTrackersById = async (userId) => {
  try {
    const res = await Client.get(`/trackers/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetOneTracker = async (userId, trackerId) => {
  try {
    const res = await Client.get(`/trackers/${userId}/${trackerId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateTrackers = async (data, userId) => {
  try {
    const res = await Client.post(`/trackers/${userId}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateTrackers = async (userId, trackerId, data) => {
  try {
    const res = await Client.put(`/schedule/${userId}/${trackerId}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteTracker = async (userId, trackerId) => {
  try {
    const res = await Client.delete(`/schedule/${(userId, trackerId)}`)
    return res.data
  } catch (error) {
    throw error
  }
}
