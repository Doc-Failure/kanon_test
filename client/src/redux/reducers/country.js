import { ADD_COUNTRIES } from "../actionTypes";

const initialState = {
  countries: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_COUNTRIES: {
      const { content } = action.payload;
      return {
        ...state,
        countries: [...state.countries, { content }],
      };
    }
    default:
      return state;
  }
}
