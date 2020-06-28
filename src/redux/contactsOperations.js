import axios from 'axios';

import { addStateStart, addStateSuccess, addStateError, removeContactStart, removeContactSuccess, removeContactError, addContactStart, addContactSuccess, addContactError, } from './contactsActions';

export const addState = () => dispatch => {
    dispatch(addStateStart());

    axios.get('http://localhost:8081/contacts').then(response => {
        dispatch(addStateSuccess(response.data))
    }).catch(error => {
        dispatch(addStateError(error));
    });
};

export const removeContact = (contactId) => dispatch => {
    dispatch(removeContactStart());
    axios.delete(`http://localhost:8081/contacts/${contactId}`).then(() => {
        dispatch(removeContactSuccess(contactId))
    }).catch(error => {
        dispatch(removeContactError(error));
    });
};

export const addContact = (contact) => dispatch => {
    dispatch(addContactStart());
    axios.post('http://localhost:8081/contacts', contact).then(response => {
        dispatch(addContactSuccess(response.data))
    }).catch(error => {
        dispatch(addContactError(error));
    });
};