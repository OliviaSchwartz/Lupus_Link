import Client from './api'

export const GetTrackersById = async (userId) => {
  try {
    const res = await Client.get(`/tracker/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetOneTracker = async (trackerId) => {
  try {
    const res = await Client.get(`/tracker/${trackerId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateTrackers = async (data, id) => {
  try {
    const res = await Client.post(`/tracker/${id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateTrackers = async (userId, trackerId, data) => {
  try {
    const res = await Client.put(`/tracker/${userId}/${trackerId}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteTracker = async (userId, trackerId) => {
  try {
    const res = await Client.delete(`/tracker/${userId}/${trackerId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
