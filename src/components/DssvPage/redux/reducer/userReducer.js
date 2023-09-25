import { REMOVE_ITEM, SET_USERS } from "../../constants/constants";

const initialState = {
  users: [],
};

export let userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USERS: {
      state.users = payload;
      return { ...state };
    }
    case REMOVE_ITEM: {
      let cloneUser = [...state.users];
      let index = cloneUser.indexOf((item) => {
        return item.id === payload;
      });
      cloneUser.splice(index, 1);
      return { ...state, users: cloneUser };
    }

    default:
      return state;
  }
};
