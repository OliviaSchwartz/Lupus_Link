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
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteComment = async (commentId) => {
  try {
    const res = await Client.delete(`/comments/${commentId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
