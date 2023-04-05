import { GlobalStyle } from './GlobalStyle';
import { lazy, useEffect } from 'react';
import 'modern-normalize';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as React from 'react';
import { Box, Center, ChakraProvider, Spinner, Text } from '@chakra-ui/react';

import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRout';
import { refreshUser } from 'redux/auth/operation';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <ChakraProvider>
      <Center>
        <Box mt='50%' mb='20px'>
          <Text>Refreshing user</Text>
        </Box>
      </Center>
      <Center>
        <Box>
          <Spinner color="red.500" />
        </Box>
      </Center>
    </ChakraProvider>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
