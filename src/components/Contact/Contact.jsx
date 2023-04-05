import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as React from 'react';
import { ChakraProvider, Button, Text, Flex, Box } from '@chakra-ui/react';
import { deleteContact } from 'redux/contacts/operations';


export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const deleteUser = () => dispatch(deleteContact(id));
  return (
    <ChakraProvider>
			<Box>
				<Flex>
        <Flex>
					<Box w='200px' mb='15px'>
						<Text fontSize='16px'>{name}: </Text>
					</Box>
					<Box w='100px'>
						<Text fontSize='16px'>{number}</Text>
					</Box>
        </Flex>
        <Button type="button" colorScheme="blue" size="sm" onClick={deleteUser}>
          Delete
        </Button>
      </Flex>
			</Box>
    </ChakraProvider>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
