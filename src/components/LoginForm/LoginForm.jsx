import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';
import {
  ChakraProvider,
  Input,
  Text,
  Button,
  FormLabel,
  Box,
} from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <ChakraProvider>
      <Box w="50%" ml="auto" mr="auto" mt="50">
        <form onSubmit={handleSubmit} autoComplete="off">
          <FormLabel>
            <Text>Email</Text>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              htmlSize={30}
              width="auto"
              bg="white"
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
              bg="white"
            />
          </FormLabel>
          <Button type="submit" colorScheme="blue">
            Log In
          </Button>
        </form>
      </Box>
    </ChakraProvider>
  );
};
