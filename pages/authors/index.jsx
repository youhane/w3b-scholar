import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Searchbar from "../../components/common/Searchbar/Searchbar";
import AuthorCard from "../../components/pages/Authors/AuthorCard";

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
            {property.data.map((author) => (
              <AuthorCard key={author.id} {...author} />
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export async function getServerSideProps() {
  const getUsers = async () => {
    const usersReference = collection(db, "users");
    const res = await getDocs(usersReference);

    const users = res?.docs.map((doc) => {
      const user = { ...doc.data() };
      user.id = user.uid;
      delete user.uid;

      return {
        ...user,
      };
    });

    return users;
  };

  const users = await getUsers();
  const authors = [];

  users.forEach((user) => {
    if (user?.is_author) {
      authors.push(user);
    }
  });

  return {
    props: {
      authors,
    },
  };
}

export default Authors;
