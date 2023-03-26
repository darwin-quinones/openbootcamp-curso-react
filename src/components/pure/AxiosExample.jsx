import React, { useState, useEffect } from 'react';
import { getRandomUser } from '../../services/axiosService.js'

const AxiosExample = () => {

    const [user, setUser] = useState(null)
    useEffect(() => {
        obtainRandomUser()
    }, [])

    const obtainRandomUser = () => {
        getRandomUser()
            .then((response) => {
                if (response.status === 200) {
                    setUser(response.data.results)
                    console.log(response)
                }

            })
            .catch((error) => { console.log(`Something went wrong ${error}`) })
    }
    console.log(user)
    return (
        <div>
            <h1>Axios Example</h1>
            {
                user != null ?
                    (<div>
                        {/* <img src={user.picture.large} /> */}
                        <h2>{user[0].name.title} {user[0].name.first} {user[0].name.last} </h2>
                        <h3>{user[0].email}</h3>
                    </div>)
                    :
                    (
                        <div>
                            <p>Generate random user</p>
                            <button onClick={() => obtainRandomUser()}>Generate</button>
                        </div>
                    )
            }

        </div>
    );
}

export default AxiosExample;
