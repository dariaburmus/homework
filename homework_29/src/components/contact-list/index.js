import React, { useState } from "react";
import TableHead from "../table/TableHead";
import TableBody from "../table/TableBody";
import NewContactForm from "./NewContactForm";

import { useContacts } from "../../hooks";

import "./styles.scss";

const columns = ["name", "surname", "phone", "email"];

const ContactList = () => {
  const { contacts, loading, removeContact, addContact } = useContacts();

  return loading ? (
    <div>loading</div>
  ) : (
    <div className="content">
      <div className="table">
        <table>
          <TableHead columns={columns} />
          <TableBody
            data={contacts}
            columns={columns}
            deleteRow={removeContact}
          />
        </table>
      </div>
      <NewContactForm handleAddContact={addContact} />
    </div>
  );
};

export default ContactList;
