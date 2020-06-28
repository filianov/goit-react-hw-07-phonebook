import { Type } from './actionsTypes';
import { createAction } from '@reduxjs/toolkit';

export const addStateStart = () => ({
    type: Type.ADD_STATE_START,
});

export const addStateSuccess = (newContacts) => ({
    type: Type.ADD_STATE_SUCCESS,
    payload: newContacts,
});

export const addStateError = (error) => ({
    type: Type.ADD_STATE_ERROR,
    payload: error,
});

// export const addState = (contactsLS) => ({
//     type: Type.ADD_STATE,
//     payload: contactsLS,
// });

// export const addState = createAction(Type.ADD_STATE);


export const addContactStart = () => ({
    type: Type.ADD_CONTACT_START,
});

export const addContactSuccess = (contact) => ({
    type: Type.ADD_CONTACT_SUCCESS,
    payload: contact,
});

export const addContactError = (error) => ({
    type: Type.ADD_CONTACT_ERROR,
    payload: error,
});

// export const addContact = (contact) => ({
//     type: Type.ADD_CONTACT,
//     payload: contact,
// });

// export const addContact = createAction(Type.ADD_CONTACT);


export const removeContactStart = () => ({
    type: Type.REMOVE_CONTACT_START,
});

export const removeContactSuccess = (contactId) => ({
    type: Type.REMOVE_CONTACT_SUCCESS,
    payload: contactId,
});

export const removeContactError = (error) => ({
    type: Type.REMOVE_CONTACT_ERROR,
    payload: error,
});

// export const removeContact = (contactId) => ({
//     type: Type.REMOVE_CONTACT,
//     payload: contactId,
// });

// export const removeContact = createAction(Type.REMOVE_CONTACT);

// export const changeFilter = value => ({
//     type: Type.FILTER,
//     payload: value,
// });

export const changeFilter = createAction(Type.FILTER);


