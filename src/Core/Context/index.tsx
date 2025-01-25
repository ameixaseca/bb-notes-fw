import { createContext, useContext, useState } from "react";

export interface ApplicationState {
    language: 'en' | 'pt';
    theme: 'light' | 'dark';
}

export interface ApplicationContext {
    state: ApplicationState;
    setState: (state: ApplicationState) => void;
}

const initialState: ApplicationState = {
    language: 'en',
    theme: 'light',
}

const initialContext: ApplicationContext = {
    state: initialState,
    setState: () => { },
}

const Context = createContext(initialContext);

export default function useApplicationContext() {
    return useContext(Context);
}

export const ContextProvider = ({ children }: { children: React.ReactNode }
) => {
    const [applicationState, setApplicationState] = useState(initialState);
    return (
        <Context.Provider value={{ state: applicationState, setState: setApplicationState }}>
            {children}
        </Context.Provider>
    )
}