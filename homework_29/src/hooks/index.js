import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContacts,
  addContactAsync,
  removeContactAsync,
} from "../store/thunks";

export const useContacts = () => {
  const { loading, data: contacts } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addContact = (contact) => {
    dispatch(addContactAsync(contact));
  };

  const removeContact = (id) => {
    dispatch(removeContactAsync(id));
  };

  return { loading, contacts, addContact, removeContact };
};
