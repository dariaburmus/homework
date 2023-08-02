import { useEffect, useState } from "react";
import { randomKey } from "../utils";

export const useContacts = () => {
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { ...contact, id: randomKey() },
    ]);
  };

  const removeContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter(({ id: contactId }) => contactId !== id)
    );
  };

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setLoading(true);

        const rawData = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await rawData.json();
        setContacts(
          data.map((item) => {
            const [name, surname] = item.name.split(" ");

            return { ...item, name, surname };
          })
        );
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return { loading, contacts, addContact, removeContact };
};
