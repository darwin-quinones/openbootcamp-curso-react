import axios from 'axios'
/**
 ** Login Method to Reqres endpoint
 *  @param { string } email
 *  @param { string } password
 */

 export const login = (email, password) => {

    // body
    let body = {
        email: email,
        password: password
    }
    // Return the response with a Promise
    return axios.post('https://reqres.in/api/login', body)
 }

 // TODO Obtain all users
 
 // TODO Obtain user by ID

 // TODO Create user

 // TODO Update user