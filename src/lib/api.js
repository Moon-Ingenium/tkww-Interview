import axios from 'axios'

async function getProducts() {
    return await axios.get('https://qa-registry-interview-api.regsvcs.theknot.com/products')
}

const API = { getProducts }

export default API;