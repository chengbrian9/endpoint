import React from "react";
import { Image, Box, Text, Spinner } from "@chakra-ui/react";

const Label = ({title, data, fontSize }) => {
  return (
    <Box display="flex" alignItems="baseline" mt="0.5rem">
          <Box
            display="flex"
            fontWeight="medium"
            letterSpacing="wide"
            fontSize="xs"
            minW="4rem"
            alignItems="flex-start"
          >
            {title}
          </Box>
          <Text ml="2rem" fontSize={fontSize} isTruncated>{data}</Text>
        </Box>
  )
}

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
          src={
            cardInfo
              ? cardInfo.download_url
              : "https://i.guim.co.uk/img/media/8c7f4fe66d305fb86fc3246dd47a9c06d216f7ec/0_139_1268_761/master/1268.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=34aaf5d1e5735155ef9555359ac15be3"
          }
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
        <Label 
          title={'Author'}
          data={cardInfo ? cardInfo.author : "Lorum Ipsom"}
          />  
        <Label 
          title={'ID'}
          data={cardInfo ? cardInfo.id : "Lorum Ipsom"}
          />    
        <Label 
          title={'URL'}
          data={cardInfo ? cardInfo.url : "Lorum Ipsom"}
          fontSize={'0.75rem'}
          />  
      </Box>
    </Box>
  );
};

export default Card;
