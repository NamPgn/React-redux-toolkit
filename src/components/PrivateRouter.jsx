import React from 'react'
import { Navigate } from 'react-router-dom';
import { isAuthenticate } from '../auth/localUser'


const PrivateRouter = (props) => {
  const dataLocal = isAuthenticate();
//   console.log('admin', isAdmmin);
    if(dataLocal){
        if(dataLocal.user.role == 0){
            return <Navigate to={'/'} />
        }else{
            return props.children
        }
    }
    return <Navigate to={'/'} />
}

export default PrivateRouter