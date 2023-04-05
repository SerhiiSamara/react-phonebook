import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import {
  fetchContactsFulfilledReducer,
  addContactsFulfilledReducer,
  deleteContactsFulfilledReducer,
  anyFulfilledReducer,
  anyPendingReducer,
  anyRejectedReducer,
} from './contactsSliceReducer';

const extraactions = [addContact, deleteContact, fetchContacts];
export const getactions = type =>
  isAnyOf(...extraactions.map(action => action[type]));

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
      .addCase(addContact.fulfilled, addContactsFulfilledReducer)
      .addCase(deleteContact.fulfilled, deleteContactsFulfilledReducer)
      .addMatcher(getactions('fulfilled'), anyFulfilledReducer)
      .addMatcher(getactions('pending'), anyPendingReducer)
      .addMatcher(getactions('rejected'), anyRejectedReducer),
});

export const contactsReducer = contactsSlice.reducer;
