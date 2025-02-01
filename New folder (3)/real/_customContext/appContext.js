// src/context/AppProvider.js
import React, {createContext, useContext, useState} from 'react';
import {Loader, Toast} from '../components';
import {SafeAreaView} from 'react-native';

const AppContext = createContext();

export const AppProvider = ({children}) => {
  // Toast state and functions
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastDescription, setToastDescription] = useState('');
  const [toastDuration, setToastDuration] = useState(3000);
  const [toastType, setToastType] = useState('');

  const showToast = (
    message,
    type = 'success',
    duration = 2500,
    description = '',
  ) => {
    setToastMessage(message);
    setToastDescription(description);
    setToastDuration(duration);
    setToastVisible(true);
    setToastType(type);
    setTimeout(() => {
      setToastVisible(false);
    }, duration);
  };

  const ToastComponent = (
    <Toast
      visible={toastVisible}
      message={toastMessage}
      description={toastDescription}
      duration={toastDuration}
      onHide={() => setToastVisible(false)}
      type={toastType}
    />
  );

  // Loader state and functions
  const [loading, setLoading] = useState(false);

  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  const LoaderComponent = <Loader visible={loading} />;

  return (
    <AppContext.Provider value={{showToast, showLoader, hideLoader}}>
      {children}
      {ToastComponent}
      {LoaderComponent}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
