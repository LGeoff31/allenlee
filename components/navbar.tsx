import { Flex, Text } from '@chakra-ui/react';

export const Navbar = () => {
	return (
		<Flex justify='space-between' bgColor='#d9effc' padding={4} fontWeight='bold'>
			<Text color='#000' fontSize='xl' ml={6}>
				Allen Lee
			</Text>
			<Flex color='#000' mr={6}>
				<Text marginX={2}>140 York Blvd</Text>
				<Text marginX={2}>+1 (416) 400 - 4898</Text>
			</Flex>
		</Flex>
	);
};
