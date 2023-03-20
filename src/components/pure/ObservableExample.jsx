import React, { useState } from 'react';
import { Observable } from 'rxjs';
import { getNumbers } from '../../services/ObservableService.js';

// INTRODUCTION TO OBSERVABLE

const ObservableExample = () => {

    const [number, setNumber] = useState(0)

    const obtainNumbers = () => {

        console.log('Subscription to Observable')
        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log('New number:', newNumber)
                    setNumber(newNumber)
                },
                error(error){
                    alert(`Something went wrong ${error}`)
                    console.log('Error in observable')
                },
                complete(){
                    alert(`Finished with: ${number}`)
                    console.log('Done with the observable')
                }
            }
        )
    }


    return (
        <div>
            <h2>Number: {number} </h2>
            <button onClick={() => obtainNumbers()}>Obtain new number</button>
        </div>
    );
}

export default ObservableExample;
