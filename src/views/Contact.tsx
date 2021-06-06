import {Box, Button, Center, Flex, FormControl, HStack, Input, Link, Text, Textarea, VStack} from "@chakra-ui/react";
import Lottie from "react-lottie";
import animationData from "../assets/animations/contact.json";
import {Icon} from "@chakra-ui/icons";
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from "react-icons/all";
import * as React from "react";
import {useState} from "react";

export const Contact = () => {
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    return <Flex flexWrap={"wrap"} h={"100%"} w={"100%"} >
        <Flex w={{base: "100%", lg: "50%"}} margin={"auto"} >
            <Box margin={"auto"}>
                <Lottie
                    options={{
                        loop: true,
                        autoplay: true,
                        rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice'
                        },
                        animationData: animationData
                    }}
                />
            </Box>
        </Flex>
        <Flex w={{base: "100%", lg: "50%"}} margin={"auto"}>
            <Box margin={"auto"}>
                <Text textAlign={"center"} fontSize={{base: "3rem", lg:"5rem"}} fontWeight={"700"}><Text as={"span"} color={"#3A86FF"}>C</Text>ontact <Text as={"span"} color={"#3A86FF"}>M</Text>e!</Text>
                <Center>
                    <HStack spacing={5} fontSize={{base: "1rem", lg:"2rem"}}>
                        <Link textDecoration={"none !important"} href={"tel:+66923458555"}>
                            <Text  fontWeight={"600"} backgroundClip={"text"} bgGradient="linear(to-l, #7928CA, #FF0080)" >
                                (+66) 92-345-8555
                            </Text>
                        </Link>
                        <Link href={"mailto:noppawan@cloudforest.co.th"}>
                            <Icon  as={AiOutlineMail}/>
                        </Link>
                        <Link href={"https://th.linkedin.com/in/noppawan-pakinsee-2a15871b1"}>
                            <Icon as={AiFillLinkedin}/>
                        </Link>
                        <Link href={"https://github.com/tigerza117"}>
                            <Icon as={AiFillGithub}/>
                        </Link>
                    </HStack>
                </Center>
                <Box p={8} boxShadow={"xl"} mb={4}>
                    <Text my={6} fontWeight={"600"} fontSize={"xl"} textAlign={"center"}>Leave me a message</Text>
                    <VStack spacing={4}>
                        <FormControl>
                            <Input onChange={(e) => setSubject(e.target.value)} value={subject} placeholder={"Enter subject"}/>
                        </FormControl>
                        <FormControl>
                            <Textarea onChange={(e) => setMessage(e.target.value)} value={message} placeholder={"Enter message"}/>
                        </FormControl>
                        <Button w={"100%"} bg={"blue"} color={"white"} _hover={{bg: "blue.800"}} onClick={() => {
                            window.open(`mailto:noppawan@cloudforest.co.th?subject=${subject}&body=${message}`)
                        }}>
                            Submit
                        </Button>
                    </VStack>
                </Box>
            </Box>
        </Flex>
    </Flex>
}
