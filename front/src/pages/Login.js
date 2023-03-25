import React from 'react'
import { useNavigate } from 'react-router-dom'
import SocialButton from "../components/SocialLogin.js";




const Login = () => {
const handleSocialLogin = (user) => {
    console.log(user);
    };

    const handleSocialLoginFailure = (err) => {
    console.error(err);
    };

  return (
    <div>Login

        <SocialButton
        provider="google"
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
        clientId={process.env.GOOGLE__API_CLIENT_ID}
        >
            Login with Google
        </SocialButton>
    </div>
  )
}

export default Login