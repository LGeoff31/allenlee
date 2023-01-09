import { Box, Link, Text } from '@chakra-ui/react';

export const Information = () => {
	return (
		<Box bgColor='#fff' color='#000'>
			<Box margin={4} padding={4} bgColor='#eee' borderRadius='8px'>
				<Text fontSize='lg' fontWeight='bold' mb={2}>
					Contact Me
				</Text>
				<Text>
					<Text as='span' fontWeight='semibold'>
						Mobile
					</Text>
					: +1 (416) 400 - 4898
				</Text>
				<Text>
					<Text as='span' fontWeight='semibold'>
						Office
					</Text>
					: +1 (647) 695 - 1188
				</Text>
				<Text mt={2}>140 York Blvd, Richmond Hill ON L3B 3J6</Text>
				<Box mt={2}>
					<Link href='http://nustreamrealty.com' textDecor='underline' isExternal>
						http://nustreamrealty.com
					</Link>
				</Box>
			</Box>
		</Box>
	);
};
