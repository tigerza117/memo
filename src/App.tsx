import * as React from "react"
import {
    ChakraProvider,
    Box,
    HStack, Button, Flex, Text, Image,
} from "@chakra-ui/react"
import theme from './theme'
import vector1 from './assets/layouts/Vector1.svg'
import vector2 from './assets/layouts/Vector2.svg'
import me from './assets/person/me.png'
import vueLogo from './assets/logos/vue.svg'
import htmlLogo from './assets/logos/html.svg'
import jsLogo from './assets/logos/js.svg'
import cssLogo from './assets/logos/css.svg'
import golangLogo from './assets/logos/golang.svg'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box h={"100vh"}>
      <Flex>
          <HStack margin={"auto"} spacing={8}>
              <Button>
                  Home
              </Button>
              <Button>
                  My work
              </Button>
              <Button>
                  Contact
              </Button>
          </HStack>
      </Flex>
      <Flex flexWrap={"wrap"} h={"80%"}>
          <Flex w={"50%"} h={"100%"}>
              <Box margin={"auto"} >
                  <Text fontWeight={700} fontSize={"5rem"}>
                      I’m <Text as={"span"} color={"#3A86FF"}>TIGER</Text>
                  </Text>
                  <Text>
                      Fullstack developer
                  </Text>
              </Box>
          </Flex>
          <Flex w={"50%"} h={"100%"}>
              <Me />
          </Flex>
      </Flex>
    </Box>
  </ChakraProvider>
)

const Me = () => {
    return <Box  margin={"auto"}  position={"relative"} transformOrigin={"center"}>

        <Image zIndex={-1} maxW={"150%"} position={"absolute"} top={0} src={vector1} alt="Vector" />
        <Image src={vector2} alt="Vector" />
        <Image position={"absolute"} top={0} src={me} alt="Me" />
        <Logos />
    </Box>
}

const Logos = () => {
    return <>
        <Box bg={"white"} p={6} boxShadow={"xl"} top={-10} position={"absolute"} rounded={"lg"}>
            <Image src={vueLogo} alt="Logo" />
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
