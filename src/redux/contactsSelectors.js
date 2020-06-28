// import { createSelector } from "reselect";

export const getContasts = state => state.contacts;

export const getFilter = state => state.filter;

// export const getCintactsWithoutRender = createSelector([getContasts, getFilter], (contacts, filter) => { contacts, filter });