import {
  FETCH_CONTACTS_SUCCESS,
  ADD_CONTACT,
  REMOVE_CONTACT,
} from "./actionTypes";

export const fetchContactsSuccess = (contacts) => ({
  type: FETCH_CONTACTS_SUCCESS,
  payload: contacts,
});

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const removeContact = (id) => ({
  type: REMOVE_CONTACT,
  payload: id,
});
