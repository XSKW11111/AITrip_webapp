"use client";

import {
  Input,
  VStack,
  HStack,
  Box,
  Button,
  Center,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { getTripPlanFromAI } from "@/service/api";
import TripCard from "@/features/tripPlan/TripCard";
import { Trip } from "@/type/trip_base";
import { IoSend } from "react-icons/io5";

const TripPage = (): React.ReactElement => {
  const [inputContent, setInputContent] = useState("");
  const [travelData, setTravelData] = useState<Trip[]>([]);

  const getOpenAIResult = async () => {
    let res = [];
    try {
      res = await getTripPlanFromAI(inputContent);
      setTravelData(res.travelPlan as Trip[]);
    } catch (e) {
      console.log(JSON.stringify(e));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputContent = e.target.value;
    setInputContent(newInputContent);
  };

  const handleSend = () => {
    void getOpenAIResult();
  };
  return (
    <VStack padding="40px">
      <VStack
        w="100%"
        borderRadius="8px"
        padding="20px"
        borderColor="gray.200"
        align="stretch"
      >
        <Text>Description of your trip</Text>

        <HStack w="100%" justifyContent="space-between">
          <Input
            maxWidth={600}
            value={inputContent}
            onChange={handleInputChange}
            borderColor="black"
          />
          <Button
            w="40px"
            h="40px"
            backgroundColor="teal.400"
            borderRadius={8}
            onClick={handleSend}
          >
            <Center>
              <IoSend size={30} />
            </Center>
          </Button>
        </HStack>
      </VStack>

      <Box overflowX="auto" width="100%" paddingBottom="20px">
        <HStack width="fit-content" gap="60px">
          {travelData &&
            travelData.map((trip, index) => {
              return <TripCard key={index} trip={trip} index={index} />;
            })}
        </HStack>
      </Box>
    </VStack>
  );
};

export default TripPage;
