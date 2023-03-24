export const getAllUsers = async () => {
    let response = await fetch('https://reqres.in/api/users')
    console.log('Response: ', response)
    console.log('Status:', response.status)
    console.log('OK?', response.ok)
    // we return the json
    return response
}

export const getAllPageUsers = async (page) => {
    let response = await fetch(`https://reqres.in/api/users?page=${page}`)
    console.log('Response: ', response)
    console.log('Status:', response.status)
    console.log('OK?', response.ok)
    // we return the json
    return response.json()
}

export const getUserDetails = async (id) =>{
    let response = await fetch(`https://reqres.in/api/users/${id}`) // get the user details acording to id
    console.log('Response: ', response)
    console.log('Status: ', response.status)
    console.log('OK?', response.ok)
    return response.json()
}

export const login = async (email, password) =>{

    let body = {email, password}


    let response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        // mode: 'no-cors',
        // credentials: 'omit',
        // cache: 'no-cache',
        // headers: {
        //     'Content-type': 'application/json'
        // },
        body,
    }) // get the authentication

    console.log('Response: ', response)
    console.log('Status: ', response.status)
    console.log('OK?', response.ok)

    return response.json()
}