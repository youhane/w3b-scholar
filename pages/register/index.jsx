import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, storage, db } from "../../firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Link from "next/link";
import {
  ContentWrapper,
  FormWrapper,
  LogoWrapper,
  Title,
  Wrapper,
  LeftFormWrapper,
  StyledButton,
  FileLabelWrapper,
  SignUpWrapper,
  ImgWrapper,
  SmallLabel,
} from "./index.styles";
import { doc, setDoc } from "firebase/firestore";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenterpassword, setreenterpassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const provider = new GoogleAuthProvider();

  const register = async () => {
    try {
      if (password !== reenterpassword) {
        alert("Passwords do not match");
        return;
      }
      await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        displayName
      ).catch((err) => alert(err.message));
      await updateProfile(auth.currentUser, { displayName, photoURL }).catch(
        (err) => alert(err.message)
      );
      setProfilePicture();
      console.log(auth.currentUser);
      const uidRef = doc(db, "users", auth.currentUser.uid);
      await setDoc(uidRef, {
        uid: auth.currentUser.uid,
      });
      alert("SUCCESSFULLY REGISTERED");
    } catch (err) {
      alert(err.message);
    }
  };
  const registerWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider).catch((err) => alert(err.message));
      alert("SUCCESSFULLY REGISTERED");
    } catch (err) {
      alert(err.message);
    }
  };

  const setProfilePicture = () => {
    const key = displayName + email;
    const imageRef = ref(storage, `profile/${key}`);
    uploadBytes(imageRef, profilePic).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setPhotoURL(url);
      });
    });
    if (profilePic != null) alert("Profile Picture Uploaded");
  };

  return (
    <Wrapper>
      <Link href="/">
        <LogoWrapper>
          <img src="/static/assets/w3bLogoLight.png" alt="W3B Logo" />
        </LogoWrapper>
      </Link>

      <Title>Sign Up</Title>
      <ContentWrapper>
        <LeftFormWrapper>
          <ImgWrapper>
            <img src="/static/assets/loginPpl.svg" alt="Sign Up" />
            <img id="line" src="/static/assets/loginLine.svg" alt="Sign Up" />
          </ImgWrapper>
        </LeftFormWrapper>
        <FormWrapper>
          <label htmlFor="display-name">Name</label>
          <input
            id="display-name"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="re-enter-password">Re-enter Password</label>
          <input
            id="reenterpassword"
            type="password"
            value={reenterpassword}
            onChange={(e) => setreenterpassword(e.target.value)}
            required
            style={{ marginBottom: "2rem" }}
          />

          {!profilePic ? (
            <FileLabelWrapper htmlFor="profile-picture">
              <img src="/static/assets/uploadIcon.png" />
              Upload your Profile Picture
            </FileLabelWrapper>
          ) : (
            <>
              <FileLabelWrapper onClick={setProfilePicture}>
                <img src="/static/assets/uploadIcon.png" />
                <div>Click to upload {profilePic.name}</div>
              </FileLabelWrapper>

              <SmallLabel htmlFor="profile-picture">
                {" "}
                or choose another image
              </SmallLabel>
            </>
          )}

          <input
            id="profile-picture"
            type="file"
            onChange={(e) => setProfilePic(e.target.files[0])}
          />

          <SignUpWrapper>
            <StyledButton onClick={register}>Sign Up</StyledButton>
            <div>atau</div>
            <FileLabelWrapper onClick={registerWithGoogle}>
              <img src="/static/assets/googleIcon.png" alt="Google" />
              Daftar dengan Google
            </FileLabelWrapper>
          </SignUpWrapper>
        </FormWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Register;
