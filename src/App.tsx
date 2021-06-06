import * as React from "react"
import {Box, Button, ChakraProvider, Container, Flex, HStack,} from "@chakra-ui/react"
import theme from './theme'
import {Contact} from "./views/Contact";
import {Home} from "./views/Home";
import {MyWork} from "./views/MyWork";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";



export const App = () => (
  <ChakraProvider theme={theme} >
      <Router>
          <Box h={"100vh"} minH={"100vh"}>
              <Container maxW={"1200px"} centerContent minH={"100vh"} h={"100%"}  >
                  <Flex my={2}>
                      <HStack margin={"auto"} spacing={{base: 4, lg: 8}}>
                          <Button exact as={NavLink} bg={"white"} to={"/"} activeClassName={"active"}>
                              Home
                          </Button>
                          <Button as={NavLink} bg={"white"} to={"/my-work"} activeClassName={"active"}>
                              My work!
                          </Button>
                          <Button as={NavLink} bg={"white"} to={"/contact"} activeClassName={"active"}>
                              Contact
                          </Button>
                      </HStack>
                  </Flex>
                  <Switch>
                      <Route path="/my-work">
                          <MyWork />
                      </Route>
                      <Route path="/contact">
                          <Contact />
                      </Route>
                      <Route path="/">
                          <Home />
                      </Route>
                  </Switch>
              </Container>
          </Box>
      </Router>

  </ChakraProvider>
)

