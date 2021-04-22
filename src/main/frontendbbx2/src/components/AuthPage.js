import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';


export default function AuthPage() {
    return (
        <div className="row justify-content-between">
            <div className="col-md-5">
                <LoginForm/>
            </div>
        
            <div style={{border: '1px solid #ababab'}}></div>
            
            <div className="col-md-6">
                <RegisterForm/>
            </div>

        </div>

    )
}
