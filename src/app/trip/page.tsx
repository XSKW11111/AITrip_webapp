"use client"

import { Input, VStack, HStack, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { debounce } from "lodash";
import { getTripPlanFromAI } from "@/service/api";
import TripCard from "@/features/tripPlan/TripCard";
import { Trip } from "@/type/trip_base";


const mockData = {
    data: [
        {
            name: 'San Francisco',
            description: 'Nice city',
        },
        {
            name: 'Palo Alto',
            description: 'Palo Alto'
        },
        {
            name: 'Moutain View',
            description: 'Moutain View'
        },
        {
            name: 'San Jose',
            description: 'San Jose'
        },
        {
            name: 'Campbell',
            description: 'Campbell'
        }
    ] as Trip[]
}
const TripPage = (): React.ReactElement => {
    const [inputContent, setInputContent] = useState('');
    const [travelData, setTravelData] = useState<Trip[]>(mockData.data);
    const IsAPITurnOn = false;
    const getOpenAIResult = async (keyword: string) => {
        let res = {};
        try {
            if (IsAPITurnOn){
                res = await getTripPlanFromAI(keyword);
            }
            setTravelData(res as Trip[]);
        }
        catch(e) {
            console.log(JSON.stringify(e));
        }
    };

    const debounceGetOpenAI = debounce(getOpenAIResult, 500);

    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const newInputContent = e.target.value;
        setInputContent(newInputContent);
        
        debounceGetOpenAI(newInputContent);
    }

    return (
        <VStack padding={20} gap='40px'>
            <Input maxWidth={600} value={inputContent} onChange={handleInputChange}/>
            <Box
                overflowX='auto'
                width='100%'
                paddingBottom='20px'
            >
                <HStack 
                    width='fit-content'
                    gap='60px'

                >
                {travelData.map((trip, index) => {
                    return (
                        <TripCard key={index} trip={trip} index={index}/>
                    )
                })
                
                }
                </HStack>
            </Box>
        </VStack>
    )
};

export default TripPage;