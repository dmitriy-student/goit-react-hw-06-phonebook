import { createAction, createReducer } from '@reduxjs/toolkit';

const contactsLs = JSON.parse(localStorage.getItem('contacts'));

const initialState = {
  data: contactsLs || [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');
export const changeFilter = createAction('contacts/changeFilter');

export const contactsReducer = createReducer(initialState, builder =>
  builder
    .addCase(addContact, (state, action) => {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    })
    .addCase(deleteContact, (state, action) => {
      return {
        ...state,
        data: state.data.filter(contact => contact.id !== action.payload),
      };
    })
    .addCase(changeFilter, (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    })
);
