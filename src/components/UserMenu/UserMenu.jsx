import { useDispatch } from 'react-redux';
import * as React from 'react';
import { ChakraProvider, Button, Text } from '@chakra-ui/react';

import { Container } from './UserMenu.styled';
import { logOut } from 'redux/auth/operation';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const {user} = useAuth();
	return (
		<ChakraProvider>
    <Container>
      <Text mr={10}>{user.email}</Text>
				<Button type="button" colorScheme="blue" size='sm' onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Container>
		</ChakraProvider>
  );
};
