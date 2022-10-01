import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, storage, db } from "../../../firebase/firebase";
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
  ErrorWrapper,
  InputWrapper,
} from "./register.styles";
import { doc, setDoc } from "firebase/firestore";
import SuccessModalRedirect from "../../common/SuccessModalRedirect/SuccessModalRedirect";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenterpassword, setreenterpassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [profilePicTemp, setProfilePicTemp] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [initialLoad, setInitialLoad] = useState(false);
  const [uploadLabelMsg, setUploadLabelMsg] = useState("Click to upload");
  const [displayModal, setDisplayModal] = useState(false);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    if (profilePicTemp != null && profilePic === null) {
      setProfilePic(profilePicTemp);
    }
  }, [profilePicTemp, profilePic]);

  const register = async () => {
    setInitialLoad(true);
    try {
      if (password !== reenterpassword) {
        return;
      } else if (displayName.length < 10) {
        return;
      } else if (!emailValidator(email)) {
        return;
      }

      await createUserWithEmailAndPassword(auth, email, password, displayName)
        .then((res) => {
          if (res) {
            setDisplayModal(true);
          }
        })
        .catch((err) => {
          if (err.message == "Firebase: Error (auth/user-not-found).") {
            setErrorMsg("Akun tidak ditemukan, coba lagi");
          } else if (err.message == "Firebase: Error (auth/invalid-email).") {
            setErrorMsg("Email salah, coba lagi");
          } else if (err.message == null) {
            resetinput();
          }
        });
      await updateProfile(auth.currentUser, { displayName, photoURL }).catch(
        (err) => alert(err.message)
      );
      setProfilePicture();
      const uidRef = doc(db, "users", auth.currentUser.uid);
      await setDoc(uidRef, {
        uid: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        profileImageURL: auth.currentUser.photoURL,
      });

      resetinput();
    } catch (err) {
      alert(err.message);
    }
  };

  const resetinput = () => {
    setEmail("");
    setPassword("");
    setreenterpassword("");
    setProfilePic(null);
    setDisplayName("");
    setPhotoURL("");
  };

  const registerWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider).catch((err) => alert(err.message));
      const uidRef = doc(db, "users", auth.currentUser.uid);
      await setDoc(uidRef, {
        uid: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        profileImageURL: auth.currentUser.photoURL,
      });
      setDisplayModal(true);
    } catch (err) {
      alert(err.message);
    }
  };

  const setProfilePicture = () => {
    const key = displayName + email;
    const imageRef = ref(storage, `profile/${key}`);
    uploadBytes(imageRef, profilePic).then((snapshot) => {
      if (profilePic != null) {
        setUploadLabelMsg("Uploaded");
      }
      getDownloadURL(snapshot.ref).then((url) => {
        setPhotoURL(url);
      });
    });
  };

  const emailValidator = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <Wrapper>
      {displayModal && (
        <SuccessModalRedirect
          setDisplayModal={setDisplayModal}
          text={"Berhasil melakukan Sign-Up, diarahkan ke Menu utama"}
        />
      )}
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

        <FormWrapper id="FormWrapper">
          <label htmlFor="display-name">Name</label>
          <InputWrapper
            id="display-name"
            wrong={displayName.length < 10 && initialLoad ? true : false}
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
          <ErrorWrapper
            show={displayName.length < 10 && initialLoad ? true : false}
          >
            Name must be at least 10 characters
          </ErrorWrapper>

          <label htmlFor="email">Email</label>
          <InputWrapper
            id="email"
            wrong={!emailValidator(email) && initialLoad ? true : false}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <ErrorWrapper
            show={!emailValidator(email) && initialLoad ? true : false}
          >
            Email must be valid
          </ErrorWrapper>

          <label htmlFor="password">Password</label>
          <InputWrapper
            id="password"
            wrong={displayName.length < 6 && initialLoad ? true : false}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <ErrorWrapper
            show={displayName.length < 6 && initialLoad ? true : false}
          >
            Password must be at least 6 characters
          </ErrorWrapper>

          <label htmlFor="re-enter-password">Re-enter Password</label>
          <InputWrapper
            id="reenterpassword"
            wrong={password != reenterpassword && initialLoad ? true : false}
            type="password"
            value={reenterpassword}
            onChange={(e) => setreenterpassword(e.target.value)}
            required
          />
          <ErrorWrapper
            show={password != reenterpassword && initialLoad ? true : false}
          >
            Password must be same
          </ErrorWrapper>

          {!profilePic ? (
            <FileLabelWrapper
              htmlFor="profile-picture"
              style={{ marginTop: "2rem" }}
            >
              <img src="/static/assets/uploadIcon.png" />
              Upload your Profile Picture
            </FileLabelWrapper>
          ) : (
            <FileLabelWrapper
              onClick={setProfilePicture}
              style={{ marginTop: "2rem" }}
            >
              <img src="/static/assets/uploadIcon.png" />
              {uploadLabelMsg} {profilePic.name}
            </FileLabelWrapper>
          )}

          <input
            type="file"
            id="change"
            name="change"
            onChange={(e) => {
              if (e.target.files.length !== 0) {
                setProfilePic(e.target.files[0]);
              }
            }}
          />

          {profilePic && (
            <SmallLabel
              onClick={() => setProfilePicTemp(profilePic)}
              htmlFor="change"
            >
              Change Image
            </SmallLabel>
          )}

          <input
            id="profile-picture"
            type="file"
            onChange={(e) => {
              if (e.target.files.length !== 0) {
                setProfilePic(e.target.files[0]);
              }
            }}
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
};

export default Register;
