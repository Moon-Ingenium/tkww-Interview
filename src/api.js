import { get } from "axios";
import { config } from "dotenv";

// Load config
config()
const { REACT_APP_TKWW_GET_PRODUCTS } = process.env

// Changed to async and await
// Renamed to reflect we are getting a list of productS

// TODO: Add authentication to the API call?
const getProducts = async () => {
    console.log(`getProduct: Fetching products from ${REACT_APP_TKWW_GET_PRODUCTS}`)
    return await get(REACT_APP_TKWW_GET_PRODUCTS)
}

// Uh-oh!  You're not *supposed* to export a default anonymous abject!
// I have changed it to export an object 
const API = { getProducts }
export default API