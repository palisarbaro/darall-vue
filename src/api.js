import axios from 'axios'

export async function getSections(){
    const url = "/api/sections"
    const response = await axios.get(url)
    return response.data
}
export async function getDishes(){
    const url = "/api/dishes"
    const response = await axios.get(url)
    return response.data
}