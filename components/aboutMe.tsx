import { Box, Link, Text } from "@chakra-ui/react";

export const AboutMe = () => {
  return (
    <Box bgColor="#fff" color="#000">
      <Box margin={4} padding={4} bgColor="#eee" borderRadius="8px">
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          About Me
        </Text>
        <Text>Allen 毕业于多伦多大学，有30多年加拿大生活和工作经验,</Text>
        <Text>包括20多年地产投资和买卖经验。</Text>
        <Text>他熟识国、英、粤语。客户们称赞他为人诚恳，服务周到。</Text>
        <Text>✳️35年加国经验用心为您服务✳️</Text>
        <Text>35 Years of Canadian Experience to Serve You</Text>
      </Box>
    </Box>
  );
};
