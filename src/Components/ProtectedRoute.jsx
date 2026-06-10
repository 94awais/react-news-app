import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

import { Outlet } from 'react-router-dom';
import Loader from '../Ui/Loader';


const ProtectedRoute = () => {

  
const {
    isLoading, // Loading state, the SDK needs to reach Auth0 on load
    isAuthenticated,
    error,
    loginWithRedirect ,// Starts the login flow
    logout,
    user, // User profile
  } = useAuth0();


  if(isLoading) return <Loader/>


  if(!isAuthenticated){


loginWithRedirect({


    appState:{

        returnTo:window.location.pathname,
    }
});


return null;
  }


  return <Outlet/>;



};

export default ProtectedRoute
