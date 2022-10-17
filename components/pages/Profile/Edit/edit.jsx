import React, { useState } from 'react'
import { FiEdit2 } from 'react-icons/fi';
import Button from '../../../common/Button/Button';
import Input from '../../../common/Input/Input'
import ChangePasswordModal from '../ChangePasswordModal/ChangePasswordModal';
import { ChangePassword, ChangeProfilePicture, Wrapper } from './edit.styles';

function EditProfile({ user }) {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [company, setCompany] = useState(user.company);
    const [position, setPosition] = useState(user.position);
    const [profileImageURL, setProfileImageURL] = useState(user.profileImageURL);
    const [newImage, setNewImage] = useState(profileImageURL);
    const [changePasswordModal, setChangePasswordModal] = useState(false);

    return (
        <Wrapper>
            <ChangeProfilePicture>
                <input type="file" id='profileImage' name='profileImage' defaultValue={profileImageURL}
                    onChange={(e) => {
                        // setNewImage(e.target.files[0]);
                        console.log(e.target.files[0]);
                        // URL.createObjectURL(e.target.files[0])
                    }} />
                <label htmlFor="profileImage">
                    <img src={profileImageURL} alt="profile" />
                    <span><FiEdit2/></span>
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
            <ChangePassword>
                <label htmlFor="changePass">Password</label>
                <button name='changePass' id='changePass' onClick={() => setChangePasswordModal(true)}>Change Password</button>
            </ChangePassword>
            {changePasswordModal && <ChangePasswordModal setChangePasswordModal={setChangePasswordModal} />}
            <Button text="Simpan" />
        </Wrapper>
    )
}

export default EditProfile