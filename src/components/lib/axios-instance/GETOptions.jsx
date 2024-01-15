import axios from 'axios'

const access_token = import.meta.env.VITE_REACT_APP_ACCESS_TOKEN

const GETOptions = axios.create({
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${access_token}`
    }
})


export default GETOptions