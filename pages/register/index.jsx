import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, storage } from '../../firebase/firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [photoURL, setPhotoURL] = useState("");

    const register = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password, displayName)
                .catch((err) => alert(err.message)
                )
            await updateProfile(auth.currentUser, { displayName, photoURL })
                .catch((err) => alert(err.message)
                )
            setProfilePicture()
            alert('SUCCESSFULLY REGISTERED')
        } catch (err) {
            alert(err.message)
        }
    }

    const setProfilePicture = () => {
        const key = displayName + email
        const imageRef = ref(storage, `profile/${key}`)
        uploadBytes(imageRef, profilePic).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setPhotoURL(url)
            })
        })
        alert('Profile Picture Uploaded')
    }

    return (
        <div>
            <h1>Register</h1>
            <input type="file" value={profilePic} onChange={(e) => setProfilePic(e.target.files[0])} />
            <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
            <button onClick={register}>Register</button>
            <button onClick={setProfilePicture}>Upload</button>
        </div>
    )
}

export default Register