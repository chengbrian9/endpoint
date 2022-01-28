import logo from "./logo.svg";
import "./App.css";
import GalleryContainer from "./components/GalleryContainer";
import React, { useState, useEffect } from "react";
import { Button, Center, Heading } from "@chakra-ui/react";
import axios from "axios";

function App() {
  const [page, setPage] = useState(1);
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  function handleNext() {
    setIsLoading(true);
    setPage(page + 1);
  }
  function handlePrev() {
    setIsLoading(true);
    setPage(page - 1);
  }

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?", {
        params: {
          page: `${page}`,
          limit: 10,
        },
      })
      .then((data) => {
        setCardData(data.data);
      })
      .then(() => setIsLoading(false))
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
        alert(err);
      });
  }, [page]);

  if (isLoading) {
    <div>Loading...</div>;
  }

  if (isError) {
    <div>Error...</div>;
  }

  return (
    <div className="App">
      <Heading mt={45} mb={35}>
        Endpoint Gallery
      </Heading>
      <GalleryContainer
        cardData={cardData}
        isLoading={isLoading}
        isError={isError}
        page={page}
      />
      <Center>
        {isLoading ? (
          <Button ml={2.5} background="#009fb4" isLoading></Button>
        ) : (
          <Button
            mr={2.5}
            background="#009fb4"
            color="white"
            onClick={() => handlePrev()}
            disabled={page < 2}
            _hover={{ bg: "#009fb4" }}
          >
            Previous
          </Button>
        )}
        {isLoading ? (
          <Button ml={2.5} background="#009fb4" isLoading></Button>
        ) : (
          <Button
            ml={2.5}
            background="#009fb4"
            color="white"
            onClick={() => handleNext()}
            _hover={{ bg: "#009fb4" }}
          >
            Next
          </Button>
        )}
      </Center>
    </div>
  );
}

export default App;
