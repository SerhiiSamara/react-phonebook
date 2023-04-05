import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import {
  ChakraProvider,
  Input,
  Text,
  FormLabel,
  Center,
} from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  const onInputChange = e => dispatch(changeFilter(e.target.value));
  return (
    <ChakraProvider>
      <Center mb="20px">
        <FormLabel>
          <Text>Find contacts by name</Text>
          <Input
            type="text"
            name="filter"
            htmlSize={30}
            width="auto"
            bg="white"
            onChange={onInputChange}
          />
        </FormLabel>
      </Center>
    </ChakraProvider>
  );
};
