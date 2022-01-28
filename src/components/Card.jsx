import React from "react";
import { Image, Box, Text, Spinner } from "@chakra-ui/react";

const Card = ({ cardInfo, isLoading }) => {
  return (
    <Box
      maxW="xs"
      minW="xs"
      borderRadius="lg"
      overflow="hidden"
      backgroundColor="#009FB4"
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <Image
          objectFit="cover"
          maxH="200"
          minH="200"
          w="100%"
          src={cardInfo.download_url}
          alt="card-img"
        />
      )}

      <Box p="6">
        <Box
          display="flex"
          justifyItems="left"
          flexDirection="column"
          alignItems="flex-start"
          mb="0.5rem"
        >
          <Box fontWeight="semibold" letterSpacing="wide" fontSize="md">
            Lorum Ipsom
          </Box>
          <Box fontWeight="light" letterSpacing="wide" fontSize="xs">
            Lorum Ipsom
          </Box>
        </Box>

        <hr />

        <Box display="flex" alignItems="baseline" mt="0.5rem">
          <Box
            display="flex"
            fontWeight="medium"
            letterSpacing="wide"
            fontSize="xs"
            minW="4rem"
            alignItems="flex-start"
          >
            Author
          </Box>
          <Text ml="2rem">{cardInfo.author}</Text>
        </Box>
        <Box display="flex" alignItems="baseline" mt="0.5rem">
          <Box
            display="flex"
            fontWeight="medium"
            letterSpacing="wide"
            fontSize="xs"
            minW="4rem"
            alignItems="flex-start"
          >
            ID
          </Box>
          <Text ml="2rem">{cardInfo.id}</Text>
        </Box>
        <Box display="flex" alignItems="baseline" mt="0.5rem">
          <Box
            display="flex"
            fontWeight="medium"
            letterSpacing="wide"
            fontSize="xs"
            minW="4rem"
            alignItems="flex-start"
          >
            URL
          </Box>
          <Text ml="2rem" fontSize="0.75rem" isTruncated>
            {cardInfo.url}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
