import axios from 'axios'

const apiViaCep =  axios.create({baseURL:`http://viacep.com.br/ws`})

export default apiViaCep;