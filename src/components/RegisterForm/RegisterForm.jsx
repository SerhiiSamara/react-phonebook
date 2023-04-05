import { useDispatch } from 'react-redux';
import {
  ChakraProvider,
  Button,
  Input,
  Text,
  FormLabel,
  Box,
} from '@chakra-ui/react';

import { register } from 'redux/auth/operation';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <ChakraProvider>
      <Box w="40%" mr="auto" ml="auto" mt='50'>
        <form onSubmit={handleSubmit} autoComplete="off">
          <FormLabel>
            <Text>Username</Text>
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              htmlSize={30}
							width="auto"
							bg='white'
            />
          </FormLabel>
          <FormLabel>
            <Text>Email</Text>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              htmlSize={30}
							width="auto"
							bg='white'
            />
          </FormLabel>
          <FormLabel>
            <Text>Password</Text>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              htmlSize={30}
							width="auto"
							bg='white'
            />
          </FormLabel>
          <Button type="submit" colorScheme="blue">
            Register
          </Button>
        </form>
      </Box>
    </ChakraProvider>
  );
};
