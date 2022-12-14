import Client from './api'

export const GetTopics = async () => {
  try {
    const res = await Client.get(`/topics`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetOneTopic = async (id) => {
  try {
    const res = await Client.get(`/topics/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateTopic = async (userId, data) => {
  try {
    const res = await Client.post(`/topics/${userId}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteTopic = async (id) => {
  try {
    const res = await Client.delete(`/topics/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
