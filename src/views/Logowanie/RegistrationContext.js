import React, { createContext, useContext, useReducer } from 'react';

const RegistrationContext = createContext();

const initialState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  password: '',
  PIN:'',
  verificationCode: '',
  accountType: '',
  country: '',
  street: '',
  postalCode: '',
  city: '',
  branch: '',
};

const registrationReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_USER_DATA':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const RegistrationProvider = ({ children }) => {
  const [userData, dispatch] = useReducer(registrationReducer, initialState);

  const updateUserData = (payload) => {
    dispatch({ type: 'UPDATE_USER_DATA', payload });
  };

  return (
    <RegistrationContext.Provider value={{ userData, updateUserData }}>
      {children}
    </RegistrationContext.Provider>
  );
};

const useRegistration = () => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error('useRegistration must be used within a RegistrationProvider');
  }
  return context;
};

export { RegistrationProvider, useRegistration };
