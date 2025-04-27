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
      state.contacts.items.push(action.payload);
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
