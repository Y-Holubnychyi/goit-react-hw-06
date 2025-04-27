import { createSlice } from "@reduxjs/toolkit";
import ContactInfo from "../contactListInfo.json";

const INITIAL_STATE = {
  contacts: { items: ContactInfo },
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      const newContact = action.payload;

      if (!newContact.name.trim()) {
        alert("Name cannot be empty or just spaces!");
        return;
      }

      const contactExists = state.contacts.items.some(
        (contact) =>
          contact.name === newContact.name ||
          contact.number === newContact.number
      );

      if (!contactExists) {
        state.contacts.items.push(newContact);
      } else {
        alert("Contact with this name or number already exists!");
      }
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (user) => user.id !== action.payload
      );
    },
  },
});

export const selectContacts = (state) => state.contactsData.contacts.items;
export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
