import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebase/firebase';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
                .catch((err) => alert(err.message)
                )
            alert(`SUCCESFULLY LOGGED IN - ${email}`)
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login