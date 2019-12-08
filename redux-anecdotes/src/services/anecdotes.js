import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  console.log("create new, content: ", content)
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  console.log(response.data)
  return response.data
}

const vote = async (newObject) => {  
  const response = await axios.put(`${baseUrl}/${newObject.id}`, newObject)
  return response.data
}

export default { 
  getAll,
  createNew,
  vote
 }