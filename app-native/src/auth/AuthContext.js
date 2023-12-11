import { createContext, useContext, useState } from "react";
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';

const AuthContext = createContext();

const storage = new MMKVLoader().initialize();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useMMKVStorage();

    const singIn = (newToken) => {

        try {

            storage('token', newToken)

        } catch (error) {

            console.error('Erro ao salvar o Token!', error);

        }

    };

    const singOut = () => {

        try {
            
            setToken(null);

        } catch (error) {
            
            console.error('Erro ao remover o Token!', error);

        }

    }

    return (

        <AuthContext.Provider value={{token, singIn, singOut}}>
            {children}
        </AuthContext.Provider>

    );

};

export const useAuth = () => {

    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuth deve ser usado dentro do AuthProvider');
    }

    return context;

}