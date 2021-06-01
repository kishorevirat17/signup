import React from 'react'
import {useAuth0 } from '@auth0/auth0-react'
import{Link} from 'react-router-dom'
import { Button } from '@material-ui/core'

const LoginButton = () => {

    const{loginWithRedirect,isAuthenticated}=useAuth0()

    return (
        !isAuthenticated &&(
      <Link to='/profile'> <Button variant="outlined" color="secondary" onClick={()=>loginWithRedirect()} >
      Login
    </Button></Link> 
      
     
        )
    )
}

export default LoginButton
