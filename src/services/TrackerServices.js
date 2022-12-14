import Client from './api'

export const GetTrackersById = async (userId) => {
  try {
    const res = await Client.get(`/tracker/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetOneTracker = async (id) => {
  try {
    const res = await Client.get(`/tracker/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateTrackers = async (id, data) => {
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

export const DeleteTracker = async (id) => {
  try {
    const res = await Client.delete(`/tracker/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
