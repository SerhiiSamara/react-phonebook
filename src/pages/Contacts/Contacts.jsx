import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import { ChakraProvider, Box, Center, Spinner, Heading } from '@chakra-ui/react';

import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ChakraProvider>
      <Box w="300px" mr="auto" ml="auto" mb="40px">
				<Center mt='30px' mb="15px">
					<Heading as='h6' size='md'>
						Phonebook
					</Heading>
				</Center>
        <ContactForm />
      </Box>
      <Box w="500px" mr="auto" ml="auto">
				<Center mb="15px">
					<Heading as='h6' size='md'>
						Contacts
					</Heading>
				</Center>
				<Filter />
				{isLoading && !error &&<Center><Spinner color='red.500' /></Center>}
        {contacts.length > 0 && (
          <>
            <ContactsList />
          </>
        )}
        {error && <h2>ERROR...</h2>}
        {contacts.length <= 0 && !error && !isLoading && (
          <h4>Sorry. Your phonebok is empty.</h4>
        )}
      </Box>
    </ChakraProvider>
  );
}
