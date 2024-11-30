import React from "react";
import styled from "@emotion/styled";
import { HStack, Box, Icon} from "@chakra-ui/react";
import { FaPlaneDeparture } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


const Container = HStack;

const HeaderIconContainer = Box;

const HeaderDropDownContainer = Box;

const HeaderProfileContainer = Box;


const Header = (): React.ReactElement => {
    return (
        <Container bg="#000" color="#fff" w="100%" h="60px" position="sticky" justifyContent="space-between" alignItems="center" paddingX="20px" paddingY="8px">
            <HeaderIconContainer justifyContent="center" alignItems="center" w="20px">
            <FaPlaneDeparture size={30} color="#fff"/>

            </HeaderIconContainer>
            <HStack>
            <HeaderDropDownContainer>

            </HeaderDropDownContainer>
            <HeaderProfileContainer>
                <CgProfile size={30} color="#fff"/>
            </HeaderProfileContainer>
            </HStack>
        </Container>
    )
};

export default Header;