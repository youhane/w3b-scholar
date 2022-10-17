import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import { CloseButton, OuterWrapper, Wrapper } from './ChangePasswordModal.styles'

function ChangePasswordModal({ setChangePasswordModal }) {
  const [email, setEmail] = useState("");

  const resetPassword = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Password reset email sent! Please check your email inbox')
      })
      .catch((error) => {
        alert(error.code + " " + error.message)
      });
    setChangePasswordModal(false)
  }

  return (
    <OuterWrapper>
      <Wrapper>
        <CloseButton onClick={() => setChangePasswordModal(false)}>X</CloseButton>
        <h1>Change Password</h1>
        <p>Enter your email address and we will send you a link to reset your password.</p>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button className='reset-button' onClick={resetPassword}>Send Reset Link</button>
      </Wrapper>
    </OuterWrapper>
  )
}

export default ChangePasswordModal