import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.data;

export const selectFilter = state => state.contacts.filter;

export const selectFiltredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    )
);
