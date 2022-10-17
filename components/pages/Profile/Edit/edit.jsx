import React, { useState } from 'react'
import { FiEdit2 } from 'react-icons/fi';
import { db, storage } from '../../../../firebase/firebase';
import Button from '../../../common/Button/Button';
import Input from '../../../common/Input/Input'
import { ChangePassword, ChangeProfilePicture, Wrapper } from './edit.styles';
import { doc, setDoc } from "firebase/firestore";

function EditProfile({ user, setChangePasswordModal }) {
    const [name, setName] = useState(user.name);
    const [company, setCompany] = useState(user.company);
    const [position, setPosition] = useState(user.position);
    const [profileImageURL, setProfileImageURL] = useState(user.profileImageURL);

    const handleImageChange = (e) => {
        const image = e.target.files[0];
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => { },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        setProfileImageURL(url);
                    });
            }
        );
    };

    const updateProfile = () => {
        const userRef = doc(db, "users", user.uid);
        setDoc(userRef, {
            name: name,
            company: company,
            position: position,
            profileImageURL: profileImageURL,
        }).then(() => {
            alert("Profile updated successfully!");
        }).catch((error) => {
            alert(error.message);
        });
    }

    return (
        <Wrapper>
            <ChangeProfilePicture>
                <input type="file" id='profileImage' name='profileImage' defaultValue={profileImageURL}
                    onChange={(e) => {
                        handleImageChange(e);
                        // setNewImage(e.target.files[0]);
                        console.log(e.target.files[0]);
                        // URL.createObjectURL(e.target.files[0])
                    }} />
                <label htmlFor="profileImage">
                    <img src={profileImageURL} alt="profile" />
                    <span><FiEdit2 /></span>
                </label>
            </ChangeProfilePicture>
            <Input
                name="name"
                label="Name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
            <ChangePassword>
                <label htmlFor="changePass">Password</label>
                <button name='changePass' id='changePass' onClick={() => setChangePasswordModal(true)}>Change Password</button>
            </ChangePassword>
            <Button text="Simpan" onClick={updateProfile} />
        </Wrapper>
    )
}

export default EditProfile