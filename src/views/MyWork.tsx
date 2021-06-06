import {Box, Img, Text, VStack} from "@chakra-ui/react";
import React from "react";
import ezvps from "../assets/works/ezvps.png"
import howswitch from "../assets/works/howswitch.png"
import ezvpsPanel from "../assets/works/ezvps-panel.png"
import ezvps2 from "../assets/works/ez-vps.jpg"
import lme from "../assets/works/lme.png"

export const MyWork = () => {
    return <Box>
        <VStack spacing={10} mb={4}>
            <Img src={howswitch} rounded={"xl"} boxShadow={"xl"}/>
            <Img src={lme} rounded={"xl"} boxShadow={"xl"}/>
            <Img src={ezvps} rounded={"xl"} boxShadow={"xl"}/>
            <Img src={ezvpsPanel} rounded={"xl"} boxShadow={"xl"}/>
            <Img w={"100%"} src={ezvps2} rounded={"xl"} boxShadow={"xl"}/>
        </VStack>
    </Box>
}
