import { randomKey } from "../utils";
import { fetchContactsSuccess, addContact, removeContact } from "./actions";

export const fetchContacts = () => async (dispatch) => {
  try {
    const rawData = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await rawData.json();

    const contacts = data.map((item) => {
      const [name, surname] = item.name.split(" ");
      return { ...item, name, surname };
    });

    dispatch(fetchContactsSuccess(contacts));
  } catch (error) {
    console.error(error);
  }
};

export const addContactAsync = (contact) => (dispatch) => {
  const newContact = { ...contact, id: randomKey() };

  dispatch(addContact(newContact));
};

export const removeContactAsync = (id) => (dispatch) => {
  dispatch(removeContact(id));
};
