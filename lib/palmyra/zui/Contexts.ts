import { createContext } from 'react';

export const ThemeContext = createContext('light');
export const AuthContext = createContext(null);
export const StoreFactoryContext = createContext<DataStoreFactory>(null);