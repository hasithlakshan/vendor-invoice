import axios from "axios"
import HttpRequestError from "../common/exceptions/HttpRequestError"

class APIService {

    serviceEndpoint = ""
    timeout = 60000
    formatError(error) {
        if (error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            const { response: { data, status }} = error
            throw new HttpRequestError({
                hasResponse: true,
                data,
                status
            }, status)
        }
        else if (error.request) {
            /*
             * The request was made but no response was received, `error.request`
             * is an instance of XMLHttpRequest in the browser and an instance
             * of http.ClientRequest in Node.js
             */
            const { request } = error
            throw new HttpRequestError({
                hasResponse: false
            })
        }
        else {
            // Something happened in setting up the request and triggered an Error
            const { message } = error
            throw new HttpRequestError({
                hasResponse: false,
                message
            })
        }
    }




    async get(path, headers = {}) {
        try {
            console.log("get>>>>>>", {
                url: `${this.serviceEndpoint}/${path}`,
                method: "GET",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                    ...headers
                },
                timeout: 600000
            })
            const { data: response } = await axios({
                url: `${this.serviceEndpoint}/${path}`,
                method: "GET",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                    ...headers
                },
                timeout: 600000
            })
            console.log("response>>>>>>", response)
            return response
        }
        catch (error) {
            console.log("error>>>>>>", error)
            return this.formatError(error)
        }
    }

}

export default APIService
