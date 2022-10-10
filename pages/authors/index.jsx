import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Searchbar from "../../components/common/Searchbar/Searchbar";
import Author from "../../components/common/Author/Author";
import { COLORS } from "../../constants/styles";

const Wrapper = styled.div`
  .author-list {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-row-gap: 3rem;
    grid-column-gap: 1rem;
    justify-items: center;
    padding: 2rem 0.1rem;
  }

  @media (max-width: 1024px) {
    .author-list {
      width: 80%;
      grid-template-columns: auto auto;
      grid-row-gap: 1.5rem;
      grid-column-gap: 0rem;
    }

    .author-list-container {
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 920px) {
    .author-list {
      width: 90%;
    }
  }

  @media (max-width: 767px) {
    .author-list {
      width: 100%;
    }
  }
`;

const AuthorWrapper = styled.div`
  background-color: white !important;
  color: #394955;
`;

const Authors = (props) => {
  const router = useRouter();
  const pathName = router.pathname;

  const [authors, setAuthors] = useState([]);

  const data = {
    data: [
      {
        id: 1,
        name: "Bud Hennekes",
        position: "Content Lead",
        company: "parcl",
        profileImageURL:
          "https://www.kibrispdr.org/data/974/tom-and-jerry-funny-face-0.jpg",
      },
      {
        id: 2,
        name: "Georgios Gontikas",
        position: "Writer",
        company: "Chainsafe",
        profileImageURL:
          "https://www.kibrispdr.org/data/974/tom-and-jerry-funny-face-0.jpg",
      },
      {
        id: 3,
        name: "Nader Dabit",
        position: "DevRel",
        company: "The Graph",
        profileImageURL:
          "https://www.kibrispdr.org/data/974/tom-and-jerry-funny-face-0.jpg",
      },
    ],
  };

  const property = {
    data: [],
  };

  for (let i = 0; i < 10; i++) {
    property.data.push(...data.data);
  }

  return (
    <>
      <Searchbar />
      <Wrapper>
        <div className="author-list-container">
          <div className="author-list">
            {props.authors.map((author) => (
              <Author key={author.id} color={COLORS.white} {...author} />
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export async function getServerSideProps() {
  const authorsReference = collection(db, "users");
  const resAuthors = await getDocs(authorsReference);
  const authors = resAuthors?.docs.map((doc) => {
    return {
      company: doc.data().company,
      name: doc.data().name,
      position: doc.data().position,
      profileImageURL: doc.data().profileImageURL,
      uid: doc.data().uid,
    };
  });

  return {
    props: {
      authors,
    },
  };
}

export default Authors;
