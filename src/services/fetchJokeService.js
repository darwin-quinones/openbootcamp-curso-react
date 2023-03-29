export const getRandomJoke = async () => {
    let response = await fetch('https://api.chucknorris.io/jokes/random')
    // console.log('Response: ', response)
    // console.log('Status:', response.status)
    // console.log('OK?', response.ok)
    return response.json()
}