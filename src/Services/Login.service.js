import APIService from "./API.service"
class LoginService extends APIService {
    serviceEndpoint = "https://plappsupportfunctions.azurewebsites.net"

    /**
     * Login
     * @param credentials
     * @param domain
     * @returns {Promise<void>}
     */
    async getToken() {
        try {
            const { data } = await this.get(`api/getcodeforplweb?code=HKNdUaDMVFrM1ItIGz2vArxEXVHhSczqXpDvnJC7kHk2oOMXaNt5ew==`)
            return data
        }
        catch (error) {
            return null
        }
    }
}


const loginService = new LoginService()
export default loginService
