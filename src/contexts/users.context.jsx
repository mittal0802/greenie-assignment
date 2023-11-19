import { createContext, useEffect, useReducer } from "react";
import {
  updateUsersData,
  getUsersDetails,
} from "../utils/firebase/firebase.utils";

const createAction = (type, payload) => ({ type, payload });
const addUser = (usersData, userToAdd) => {
  return [...usersData, { ...userToAdd }];
};

export const UserDataContext = createContext({
  usersData: [],
  addUser: () => {},
});

const INITIAL_STATE = {
  usersData: [],
};

const USER_DATA_ACTION_TYPES = {
  SET_USERS_DATA: "SET_USERS_DATA",
  ADD_USER: "ADD_USER",
};

const usersReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_DATA_ACTION_TYPES.SET_USERS_DATA:
      return { ...state, usersData: payload };
    case USER_DATA_ACTION_TYPES.ADD_USER:
      return { ...state, usersData: addUser(state.usersData, payload) };
    default:
      throw new Error(`Unknown action type: "${type}" in cartReducer`);
  }
};
export const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, INITIAL_STATE);
  const { usersData } = state;
  const setUsersData = (usersData) => {
    dispatch(createAction(USER_DATA_ACTION_TYPES.SET_USERS_DATA, usersData));
  };
  const addUser = (user) => {
    dispatch(createAction(USER_DATA_ACTION_TYPES.ADD_USER, user));
  };
  useEffect(() => {
    const getUsersData = async () => {
      const usersData = await getUsersDetails();
      setUsersData(usersData);
    };
    getUsersData();
  }, []);

  useEffect(() => {
    if (usersData.length === 0) return;
    updateUsersData(usersData);
  }, [usersData]);

  const value = {
    usersData,
    addUser,
  };
  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};
