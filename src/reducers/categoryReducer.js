import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
  UPDATE_CATEGORY
} from "../actions/types";

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, action.payload];

    case DELETE_CATEGORY:
      return state.filter(category => category.key !== action.payload.key);
    case EDIT_CATEGORY:
      return state.map(
        category =>
          category.key === action.payload.key
            ? { ...category, editing: !category.editing }
            : category
      );
    case UPDATE_CATEGORY:
      return state.map(category => {
        if (category.key === action.payload.key) {
          return {
            ...category,
            name: action.payload.name,
            description: action.payload.description,
            editing: !category.editing
          };
        } else {
          return category;
        }
      });
    default:
      return state;
  }
};

export default categoryReducer;
