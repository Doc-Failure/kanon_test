import { ADD_COUNTRIES, SET_FILTER } from "./actionTypes";

export const addCountry = (content) => ({
  type: ADD_COUNTRIES,
  payload: {
    content,
  },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});
