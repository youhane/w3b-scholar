import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Searchbar from "../../components/common/Searchbar/Searchbar";
import { COLORS } from "../../constants/styles";
import Pagination from "../../components/common/Pagination/Pagination";
import AuthorCardContainer from "../../components/common/Author/AuthorCardContainer";
import Head from "next/head";

const StyledText = styled.h2`
  color: ${COLORS.darkGrey};
  text-align: center;
  margin-top: 4em;
`;

const Authors = ({ authors }) => {
  const [allAuthors, setAllAuthors] = useState(authors);
  const [filteredAuthors, setFilteredAuthors] = useState(authors);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setAllAuthors(authors);
  }, []);

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery]);

  const handleSearch = async (query) => {
    if (query !== "") {
      const searchedAuthors = allAuthors.filter((author) => {
        return author.name.toLowerCase().includes(query.toLowerCase());
      });

      if (searchedAuthors.length === 0 || !searchedAuthors) {
        setFilteredAuthors([]);
      } else {
        setFilteredAuthors(searchedAuthors);
      }
    } else {
      setFilteredAuthors(allAuthors);
    }
  };

  return (
    <>
      <Head>
        <title>W3B Scholar | Authors</title>
        <meta name="description" content="W3B Scholar - Authors" />
        <meta property="og:image" content="../public/logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Searchbar
        onSearch={handleSearch}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />
      {filteredAuthors.length > 0 ? (
        <Pagination
          data={filteredAuthors}
          RenderComponent={AuthorCardContainer}
          buttonConst={3}
          contentPerPage={9}
          siblingCount={1}
        />
      ) : (
        <StyledText>
          <h2>No matching authors</h2>
        </StyledText>
      )}
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
