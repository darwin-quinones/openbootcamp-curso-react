import React, { useState, useEffect } from 'react';

// service importation
import { getAllUsers } from '../../services/fetchService'

const FetchExample = () => {

    const [ users, setUsers ]   = useState(0)

    useEffect(() => {
        obtainUsers()
    }, []) // [], para que se ejecute una sola vez

    const obtainUsers = () => {

    }

    return (
        <div>
            
        </div>
    );
}

export default FetchExample;
