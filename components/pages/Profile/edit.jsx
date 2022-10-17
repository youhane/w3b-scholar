import React, { useState } from 'react'
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input'
import { Wrapper } from './edit.styles';

function EditProfile({ user }) {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [company, setCompany] = useState(user.company);
    const [position, setPosition] = useState(user.position);
    const [profileImageURL, setProfileImageURL] = useState(user.profileImageURL);
    const [newImage, setNewImage] = useState(profileImageURL);

    return (
        <Wrapper>
            <input type="file" id='profileImage' name='profileImage' value={newImage} 
            onChange={(e) => { 
                setNewImage(e.target.files[0]); 
                console.log(e.target.files[0]); 
                URL.createObjectURL(e.target.files[0]) 
            }} />
            <label htmlFor="profileImage">
                <img src={newImage} alt="profile" />
            </label>
            <Input 
                name="name" 
                label="Name" 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <Input 
                name="email" 
                label="Email" 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <Input 
                name="company" 
                label="Company" 
                type="text" 
                placeholder="Company" 
                value={company} 
                onChange={(e) => setCompany(e.target.value)} 
            />
            <Input 
                name="position" 
                label="Position" 
                type="text" 
                placeholder="Position" 
                value={position} 
                onChange={(e) => setPosition(e.target.value)} 
            />
            <div>
                <label htmlFor="changePass">Password</label>
                <button name='changePass' id='changePass'>Change Password</button>
            </div>
            <Button text="Simpan" />
        </Wrapper>
    )
}

export default EditProfile