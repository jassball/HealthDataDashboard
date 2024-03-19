import React from 'react'
import { AuthPage } from '@refinedev/antd'
import { authCredentials } from '../../providers/auth'

export const Login = () => {
    return (
        <AuthPage 
        type='login'
        formProps={{
            initialValues: authCredentials, 
        }}
        />
    )
}

export default Login