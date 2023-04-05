import { Container } from './Home.styled';
import { Heading} from '@chakra-ui/react';

export default function Home() {
  return (
    <Container>
      <Heading as='h1'>Phonebook welcome page</Heading>
    </Container>
  );
}
