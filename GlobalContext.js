import React, { createContext, useReducer } from 'react';

const initialState = {
  user: null,
  favorites: [],
  cart: [],
};

const actionTypes = {
  SET_USER: 'SET_USER',
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, user: action.payload };
    case actionTypes.ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case actionTypes.REMOVE_FAVORITE:
      return { ...state, favorites: state.favorites.filter(item => item.id !== action.payload) };
    case actionTypes.ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case actionTypes.REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
    default:
      return state;
  }
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};