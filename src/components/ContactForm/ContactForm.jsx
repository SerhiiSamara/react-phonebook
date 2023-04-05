import { addContact } from 'redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  ChakraProvider,
  Button,
  Input,
  Text,
  FormLabel,
} from '@chakra-ui/react';

import { selectContacts } from 'redux/contacts/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (
      contacts.map(contact => contact.name).includes(form.elements.name.value)
    ) {
      alert(`${form.elements.name.value} is already in contacts.`);
      return;
    }
    dispatch(
      addContact({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;

      case 'number':
        setNumber(e.target.value);
        break;

      default:
    }
  };

  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit}>
        <FormLabel>
          <Text>Name</Text>
          <Input
            type="text"
            name="name"
            value={name}
            placeholder="Enter email"
            htmlSize={30}
						width="auto"
						bg='white'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </FormLabel>
        <FormLabel>
          <Text>Number</Text>
          <Input
            type="tel"
            name="number"
            value={number}
            placeholder="Enter email"
            htmlSize={30}
						width="auto"
						bg='white'
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </FormLabel>
        <Button type="submit" colorScheme="blue">
          Add contact
        </Button>
      </form>
    </ChakraProvider>
  );
};
