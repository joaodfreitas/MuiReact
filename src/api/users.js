
const BASE_URL = "https://randmuser.me/api/"

export const getUsers = () => {

return axios.get(`${BASE_URL}?results=20&nat=br`)



}