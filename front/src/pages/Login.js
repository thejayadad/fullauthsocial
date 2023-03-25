import React from 'react'
import { useNavigate } from 'react-router-dom'

import { GoogleLogin } from '@react-oauth/google';

import {client} from "../client.js"

const Login = () => {
    const navigate = useNavigate();

    const responseMessage = (response) => {
        localStorage.setItem('user', JSON.stringify(response.Obj));
        console.log(response)
        const { name, googleId, imageUrl } = response.Obj;
        const doc = {
          _id: googleId,
          _type: 'user',
          userName: name,
          image: imageUrl,
        };
        client.createIfNotExists(doc).then(() => {
          navigate('/', { replace: true });
        });

    }




    const errorMessage = (error) => {
        console.log(error);
    };
  return (
    <div>Login

    <GoogleLogin
    render={(renderProps) => (
        <button
        type='button'
        onClick={renderProps.onClick}
        disabled={renderProps.disabled}

        >
            Signin Google
        </button>
    )}
    onSuccess={responseMessage}
    onFalilure={errorMessage}
    cookiePolicy="single_host_origin"
    />

    </div>
  )
}

export default Login