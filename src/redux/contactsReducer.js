import { Type } from './actionsTypes';

// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, removeContact, changeFilter } from './contactsActions';
// import { addState } from './contactsOperations';

const initialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    loading: false,
    error: '',
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.ADD_STATE_START:
        case Type.REMOVE_CONTACT_START:
        case Type.ADD_CONTACT_START:
            return {
                ...state,
                loading: true
            };
        case Type.ADD_STATE_SUCCESS:
            return {
                ...state,
                contacts: action.payload,
                loading: false,
            };
        case Type.ADD_STATE_ERROR:
        case Type.REMOVE_CONTACT_ERROR:
        case Type.ADD_CONTACT_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case Type.ADD_CONTACT_SUCCESS:
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
                loading: false,
            };
        case Type.REMOVE_CONTACT_SUCCESS:
            return {
                ...state,
                contacts: state.contacts.filter(({ id }) => id !== action.payload),
                loading: false,
            };
        case Type.FILTER:
            return {
                ...state,
                filter: action.payload
            };
        default:
            return state;
    }
};

export default contactsReducer;

// export default createReducer(initialState, {
//     [addState]: (state = initialState, action) => ({
//         ...state,
//         contacts: action.payload
//     }),
//     [addContact]: (state = initialState, action) => ({
//         ...state,
//         contacts: [...state.contacts, action.payload]
//     }),
//     [removeContact]: (state = initialState, action) => ({
//         ...state,
//         contacts: state.contacts.filter(({ id }) => id !== action.payload)
//     }),
//     [changeFilter]: (state = initialState, action) => ({
//         ...state,
//         filter: action.payload
//     }),
// });

