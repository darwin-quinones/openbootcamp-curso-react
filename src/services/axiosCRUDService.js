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
export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users')
}
// TODO Obtain all paged users 
export const getAllPagedUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}

 
 // TODO Obtain user by ID
 export const getUserByID = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`)
}

 // TODO Create user
 export const createUser = (name, job) => {
    let body = {
        name: name, 
        job: job
    }
    return axios.post('https://reqres.in/api/users', body)
}

 // TODO Update user
 export const updateUserByID = (id, name, job) => {
    let body = {
        name: name, 
        job: job
    }
    return axios.put(`https://reqres.in/api/users/${id}`, body)
}

 // TODO delete user
 export const deleteUserByID = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`)
}