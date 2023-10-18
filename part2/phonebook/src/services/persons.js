import axios from "axios"

const url = 'http://localhost:3001/persons'
const getData = response => response.data

const getPersons = () => {
    return axios.get(url).then(getData)
}

const createPerson = (personObj) => {
    return axios.post(url, personObj).then(getData)
}

const delPerson = (id) => {
    axios.delete(`${url}/${id}`)
}

const updatePerson = (id, personObj) => {
    return axios.put(`${url}/${id}`, personObj).then(getData)
}

export default { getPersons, createPerson, delPerson, updatePerson}