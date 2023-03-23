export const getAllUsers = async () => {
    let response = await fetch('https://reqres.in/api/users')
    console.log('Response: ', response)
    // we return the json
    return response.json()
}