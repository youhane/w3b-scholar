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
import SuccessModal from "../../common/SuccessModal/SuccessModal";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenterpassword, setreenterpassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [profilePicTemp, setProfilePicTemp] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [initialLoad, setInitialLoad] = useState(false);
  const [uploadLabelMsg, setUploadLabelMsg] = useState("Click to upload");
  const [uploadingImg, setUploadingImg] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(true);
  const [errorMsg, setErrorMsg] = useState("Registrasi gagal, silahkan coba lagi");
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
          } else if (
            err.message ==
            "FirebaseError: Firebase: Error (auth/email-already-in-use)."
          ) {
            setErrorMsg("Email sudah digunakan, gunakan Email lain");
          } else if (err.message == null) {
            resetinput();
          }
        });
      await updateProfile(auth.currentUser, { displayName, photoURL })
        .catch((err) => {
          setRegisterSuccess(false)
          setDisplayModal(true)
          // alert(err.message)
        }
      );
      setProfilePicture();
      const uidRef = doc(db, "users", auth.currentUser.uid);
      await setDoc(uidRef, {
        uid: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        profileImageURL: auth.currentUser.photoURL,
        is_author: false,
        company: company,
        position: position,
      });
    } catch (err) {
      setRegisterSuccess(false)
      setDisplayModal(true)
      // alert(err.message);
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
      await signInWithPopup(auth, provider)
        .catch((err) => {
          setRegisterSuccess(false)
          setDisplayModal(true)
          // alert(err.message)
        });
      const uidRef = doc(db, "users", auth.currentUser.uid);
      await setDoc(uidRef, {
        uid: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        profileImageURL: auth.currentUser.photoURL,
        is_author: false,
        company: company,
        position: company,
      });
      setDisplayModal(true);
    } catch (err) {
      setRegisterSuccess(false)
      setDisplayModal(true)
      // alert(err.message);
    }
  };

  const setProfilePicture = () => {
    const key = displayName + email;
    const imageRef = ref(storage, `profile/${key}`);
    uploadBytes(imageRef, profilePic).then((snapshot) => {
      if (profilePic != null) {
        setUploadingImg(false);
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
        <SuccessModal
          setDisplayModal={setDisplayModal}
          text={
            registerSuccess ?
              "Berhasil melakukan Registrasi! Kamu akan diarahkan ke Menu utama" :
              errorMsg
          }
          redirect={"/"}
          success={registerSuccess}
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

          <label htmlFor="company">Company</label>
          <InputWrapper
            id="company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />

          <label htmlFor="position">Position</label>
          <InputWrapper
            id="position"
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />

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
              onClick={() => {
                setUploadingImg(true);
                setProfilePicture();
              }}
              style={{ marginTop: "2rem" }}
            >
              <img src="/static/assets/uploadIcon.png" />
              {uploadLabelMsg} {profilePic.name}
              <img
                src="/static/assets/loading.svg"
                style={{ display: !uploadingImg ? "none" : "block" }}
              />
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
            onInput={(e) => {
              setUploadingImg(true);
              setProfilePicture();
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
            onInput={(e) => {
              setUploadingImg(true);
              setProfilePicture();
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
