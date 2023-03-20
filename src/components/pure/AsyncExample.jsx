import React from 'react';

const AsyncExample = () => {


    // ** Normal functions

    async function generateNumber() {
        return 1
    }

    async function generatePromiseNumber() {
        return Promise.resolve(2)
    }

    async function obtainNumber() {
        generateNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    async function obtainPromiseNumber() {
        generatePromiseNumber()
            .then((response) => alert(`Promise Response: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`))
    }


    async function saveSessionStorage(key, value) {
        // *  Save
        sessionStorage.setItem(key, value)
        // * Get and return
        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage() {
        saveSessionStorage('name', 'Darwin')
            .then((response) => {
                let value = response
                alert(`Save name: ${value}`)
            }).catch((error) => {
                alert(`Something went wrong: ${error}`)
            }).finally(() => alert('SUCCESS: Name saved and retrieved.'))
    }

    // CREATE PROMISE

    async function obtainMessage(){
        let promise = new Promise((resolve, reject) =>{
            setTimeout(() => resolve('Hello world'), 5000)
        })

        let message = await promise

        await alert(`Message received: ${message}`)
    }

    // REJECT PROMISE / SEND AN ERROR

    const returnError = async () => {
        await Promise.reject(new Error('Ooooops!'))
    }

    const consumeError = () => {
        returnError()
            .then((response) => alert(`Everything is OK: ${ response }`))
            .catch((error) => alert(`Something went wrong: ${ error }`))
            .finally(() => alert('Finally execution'))
    }

    // AXAMPLES OF OTHER FETCH ERRORS

    const urlNotFound = async () => {
        try {
            let response = await fetch('https://invalidURL.com')
            alert(`Response : ${ JSON.stringify(response) }`)
        } catch (error) {
            alert(`Something went wrong with your URL: ${ error }`)
        }
    }

    // MANAGE MULTIPLE PROMISES AT THE SAME TIME

    const multiplePromise = async () => {
        let results = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2')
            ]
        ).catch((error) => alert(`Something went wrong with yours URLs: ${ error } [check the console]`))
    }

    return (
        <div>
        <h1>Async Examples</h1>
            <button onClick={() => obtainNumber()}>
                Obtain number
            </button>
            <button onClick={() => obtainPromiseNumber()}>
                Obtain Promise number
            </button>
            <button onClick={() => showStorage()}>
                Save and show name
            </button>
            <button onClick={ () => obtainMessage()}>
                Send message in 2 seconds
            </button>
            <button onClick={() => consumeError() }>Obtain Error </button>
            <button onClick={ () => urlNotFound() }>Request to unknown URL</button>
            <button onClick={ () => multiplePromise() }>Multiple Promises</button>
        </div>
    );
}

export default AsyncExample;
