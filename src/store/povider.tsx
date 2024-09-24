import * as React from 'react';
import { ModalShowLoginProvider } from './auth-store-admin';

interface IProviderProps {
  children: React.ReactNode; 
}

const Provider: React.FunctionComponent<IProviderProps> = ({ children }) => {
  return (
    <ModalShowLoginProvider>
      {children} 
    </ModalShowLoginProvider>
  );
};

export default Provider;
