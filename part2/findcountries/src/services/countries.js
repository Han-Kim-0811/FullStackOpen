import axios from 'axios'

const url = 'https://studies.cs.helsinki.fi/restcountries/api'
const getData = response => response.data

const getAll = () => {
  return axios.get(`${url}/all`).then(getData)
}

const getOne = (name) => {
  return axios.get(`${url}/name/${name}`).then(getData)
}

export default { getAll, getOne }