import {Box, Button, Flex, HStack, Image, Text} from "@chakra-ui/react";
import vector1 from "../assets/layouts/Vector1.svg";
import vector2 from "../assets/layouts/Vector2.svg";
import me from "../assets/person/me.png";
import vueLogo from "../assets/logos/vue.svg";
import jsLogo from "../assets/logos/js.svg";
import htmlLogo from "../assets/logos/html.svg";
import cssLogo from "../assets/logos/css.svg";
import golangLogo from "../assets/logos/golang.svg";
import * as React from "react";

export const Home = () => {
    return <Flex flexWrap={"wrap"} h={"100%"} w={"100%"} >
        <Flex margin={"auto"} w={{base: "100%", lg: "50%"}}>
            <Box margin={{base: "4rem auto", lg: "auto"}} >
                <Text textAlign={{base: "center", lg: "left"}} justifyContent={"center"} fontWeight={700} fontSize={"5rem"}>
                    I’m <Text as={"span"} color={"#3A86FF"}>TIGER</Text>
                </Text>
                <Text textAlign={{base: "center", lg: "left"}} fontWeight={"800"} fontSize={"2rem"} bgGradient="linear(to-l, #7928CA, #FF0080)" backgroundClip={"text"}>
                    Fullstack developer
                </Text>
            </Box>
        </Flex>
        <Flex  margin={"auto"} w={{base: "100%", lg: "50%"}}>
            <Me />
        </Flex>
    </Flex>
}

const Me = () => {
    return <Box  margin={"auto"}  position={"relative"} >
        <Image zIndex={-1} maxW={"150%"} position={"absolute"} top={0} src={vector1} alt="Vector" />
        <Image src={vector2} alt="Vector" />
        <Image position={"absolute"} top={0} src={me} alt="Me" />
        <Logos />
    </Box>
}

const Logos = () => {
    return <>
        <Box bg={"white"} p={6} boxShadow={"xl"} top={10} position={"absolute"} rounded={"lg"}>
            <Image w={"60px"} src={vueLogo} alt="Logo" />
        </Box>
        <Box bg={"white"} p={6} boxShadow={"xl"} right={0} top={0} position={"absolute"} rounded={"lg"}>
            <Image src={jsLogo} alt="Logo" />
        </Box>
        <Box bg={"white"} p={6} boxShadow={"xl"} bottom={0} position={"absolute"} rounded={"lg"}>
            <Image w={"70px"} src={htmlLogo} alt="Logo" />
        </Box>
        <Box bg={"white"} p={6} boxShadow={"xl"} left={-20} top={80} position={"absolute"} rounded={"lg"}>
            <Image w={"60px"} src={cssLogo} alt="Logo" />
        </Box>
        <Box bg={"white"}  p={4} boxShadow={"xl"} right={-40} bottom={2} position={"absolute"} rounded={"lg"}>
            <Image w={"80px"} src={golangLogo} alt="Logo" />
        </Box>
    </>
}
