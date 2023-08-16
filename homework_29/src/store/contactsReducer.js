import {
  FETCH_CONTACTS_SUCCESS,
  ADD_CONTACT,
  REMOVE_CONTACT,
} from "./actionTypes";

const initialState = {
  loading: false,
  data: [],
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case ADD_CONTACT:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case REMOVE_CONTACT:
      return {
        ...state,
        data: state.data.filter((contact) => contact.id !== action.payload),
      };
    default:
      return state;
  }
};

export default contactsReducer;
