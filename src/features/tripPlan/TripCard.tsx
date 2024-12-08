import React from "react"
import { Container, Center, Circle, VStack } from "@chakra-ui/react"
import { Trip } from "@/type/trip_base"
type TripCardProps = {
    trip?: Trip;
    index?: number;
}
const TripCard = ({trip, index = 0}: TripCardProps): React.ReactElement => {

    return (
        <VStack gap='30px'>
            <Circle size={10} backgroundColor={"teal.400"}>
                {index + 1}
            </Circle>
        <Container 
            boxSizing='border-box'
            w='170px'
            h='250px'
            padding={2}
            borderRadius={8}
            backgroundColor={"teal.400"}
            flexDirection='column'
            display='flex'
            alignItems='center'
            justifyContent='start'
        >
            <Center fontWeight={700} minHeight='100px'>{trip?.name}</Center>
            <Center >{trip?.description}</Center>
        </Container>
        </VStack>
    )
}

export default TripCard;