import React, { useState, useEffect } from "react";

import Card from "./Card.jsx";
import { Center } from '@chakra-ui/react';

const GalleryContainer = ({ page, cardData }) => {

  const flexGrid = {
    display: "flex",
    flexWrap: "wrap",
    padding: "1.5rem",
    justifyContent: "space-evenly",
    gap: "3rem 1rem",
    maxWidth: 1280,
  };


  return (
    <Center>
      <div id="gallery-grid" style={flexGrid}>
        {cardData.map((el, idx) => (
          <Card key={idx} idx={idx} cardInfo={el} page={page} />
        ))}
      </div>
    </Center>
  );
};

export default GalleryContainer;
