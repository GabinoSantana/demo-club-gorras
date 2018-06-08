import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
  UPDATE_CATEGORY
} from "./types";

export const addCategory = payload => {
  return { type: ADD_CATEGORY, payload };
};
export const deleteCategory = payload => {
  return { type: DELETE_CATEGORY, payload };
};
export const editCategory = payload => {
  return { type: EDIT_CATEGORY, payload };
};
export const updateCategory = payload => {
  return { type: UPDATE_CATEGORY, payload };
};
