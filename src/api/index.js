import axios from "axios";


export const shortenUrlApi = axios.create({
    baseURL: "https://api.shrtco.de/v2/",
    headers: {
        Accept: 'application/json'
    }

})