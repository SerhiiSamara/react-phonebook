import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Container } from './Layout.styled';

import { AppBar } from '../AppBar/AppBar';

export const Layout = () => {
  return (
    <ChakraProvider>
			<Container>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </ChakraProvider>
  );
};
