import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Footer } from "./footer";
import { Information } from "./information";
import { AboutMe } from "./aboutMe";
import { Navbar } from "./navbar";

export const Main = () => {
  return (
    <Box bgColor="#fff" color="#000">
      <Box>
        <Navbar />
        <Box margin={8}>
          <Heading textAlign="center">Allen Lee (李非）</Heading>
          <Text textAlign="center">Sales Representative</Text>
          <Text textAlign="center">NU Stream Realty (Toronto) Inc. </Text>
        </Box>
        <Flex justify="center">
          <Box flex-direction="coloumn">
            <Information />
            <AboutMe />
          </Box>

          <Image h="420px" src="/images/card.jpeg" alt="card" />
        </Flex>
        {/* <Flex justify="center">
          <AboutMe />
        </Flex> */}
      </Box>
      <Box w="70vw" h="300px" mx="auto" my={10}>
        <iframe
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?q=140%20York%20Blvd,%20Richmond%20Hill%20ON%20L3B%203J6&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </Box>
      <Footer />
    </Box>
  );
};
