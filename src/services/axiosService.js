import APIRequest from '../utils/config/axios.config.js'


export function getRandomUser() {
     // The same than https://randomuser.me/api/
    return APIRequest.get('/', {
        validateStatus: function(status) {
            return status < 500 // resolve only if the status code is less than 500
        }
    })
}