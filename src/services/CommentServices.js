import Client from './api'

export const GetComments = async (id) => {
  try {
    const res = await Client.get(`/comments/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetOneComment = async (topicId, id) => {
  try {
    const res = await Client.get(`/comments/${topicId}/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateComment = async (topicId, data) => {
  try {
    const res = await Client.post(`/comments/${topicId}`, data)
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteComment = async (topicId, id) => {
  try {
    const res = await Client.delete(`/comments/${topicId}/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
