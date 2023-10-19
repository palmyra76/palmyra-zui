import { createContext } from 'react';
import { DataStoreFactory } from './Types';

export const ThemeContext = createContext('light');
export const AuthContext = createContext(null);
export const StoreFactoryContext = createContext<DataStoreFactory>(null);