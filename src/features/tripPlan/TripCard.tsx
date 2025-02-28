import React from "react";
import { Container, Center, Circle, VStack, Image } from "@chakra-ui/react";
import { Trip } from "@/type/trip_base";

type TripCardProps = {
  trip?: Trip;
  index?: number;
};
const TripCard = ({ trip, index = 0 }: TripCardProps): React.ReactElement => {
  return (
    <VStack gap="30px">
      <Circle size={10} backgroundColor={"teal.400"}>
        {index + 1}
      </Circle>
      <Container
        boxSizing="border-box"
        w="400px"
        h="250px"
        padding={2}
        borderRadius={8}
        backgroundColor={"teal.400"}
        flexDirection="column"
        display="flex"
        alignItems="center"
        justifyContent="start"
        gap="20px"
      >
        <Image src={trip?.image} alt={trip?.name} />
        <Center fontSize="20px" fontWeight={700} minHeight="20px">
          {trip?.name}
        </Center>
        <Center fontSize="14px" overflowY="auto" maxHeight="200px">
          {trip?.description}
        </Center>
      </Container>
    </VStack>
  );
};

export default TripCard;
