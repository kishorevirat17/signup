import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
//import Apps from './Apps'
import JSONPretty from 'react-json-pretty'
const Profile = () => {

    const { user,isAuthenticated }=useAuth0()

    return (

        isAuthenticated && (

        <>
        <JSONPretty data={user} />
            <h1>Welcome.{user.name}</h1>
        
         </>
        )
    )
}

export default Profile
