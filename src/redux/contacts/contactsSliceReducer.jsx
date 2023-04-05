export const fetchContactsFulfilledReducer = (state, action) => {
  state.items = action.payload;
};
export const addContactsFulfilledReducer = (state, action) => {
  state.items.push(action.payload);
};
export const deleteContactsFulfilledReducer = (state, action) => {
  // return state.items.filter(item => item.id !== action.payload);
  const index = state.items.findIndex(item => item.id === action.payload);
  state.items.splice(index, 1);
};
export const anyFulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};
export const anyPendingReducer = state => {
  state.isLoading = true;
};
export const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
