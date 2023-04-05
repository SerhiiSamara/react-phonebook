import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import {
  ChakraProvider,
  OrderedList,
  ListItem,
  Center,
} from '@chakra-ui/react';

import { Contact } from '../Contact/Contact';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ChakraProvider>
      <Center>
        <OrderedList pt="10px">
          {filteredContacts.map(({ name, number, id }) => (
            <ListItem key={id}>
              <Contact name={name} number={number} id={id} />
            </ListItem>
          ))}
        </OrderedList>
      </Center>
    </ChakraProvider>
  );
};
