import { useState } from "react"
import { shortenUrlApi } from "../api"
import useLocalStorage from "./useLocalStorage"

const useFetch = (textInput, setTextInput) => {

    const [storedValue, setValue] = useLocalStorage("shortedStorage", [])
    const [errorHandling, setErrorHandling] = useState("")
    const [loading, setLoading] = useState(false)
    // Shorten any valid URL
    const fetchApi = async () => {
        try {

            //prevent to send duplicate url
            const duplicate = storedValue.find(i => textInput.includes(i.send))
            if (duplicate) {
                return setErrorHandling("You have already received the short url")
            }
            setLoading(true)
            const response = await shortenUrlApi("shorten?url=" + textInput)
            // console.log(response)
            const objResponse = {
                send: textInput,
                receive: response.data.result.short_link,
            }
            //push objResponse to the shortedREsponse array
            setValue(old => [...old, objResponse])
            setLoading(false)
            //clearing
            setTextInput("")
            setErrorHandling("")
        } catch (error) {
            setLoading(false)
            if (error.response.data.error_code === 2) {
                return setErrorHandling("This is not a valid URL")
            }
            if (error.response.data.error_code === 10) {
                return setErrorHandling("The link you entered is a disallowed link")
            }
            if (error.response.data.error_code === 3) {
                return setErrorHandling("Rate limit reached. Wait a second and try again")
            }
            setErrorHandling(error.response.data.error)
            console.log(error)
        }
    }
    return [fetchApi, errorHandling, storedValue, setErrorHandling, loading]
}

export default useFetch