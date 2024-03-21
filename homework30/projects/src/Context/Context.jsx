import React, {createContext, useReducer} from "react";
import {reducer, initialState} from "../Reducer/reducer";

export const AppContext = createContext({})

function Context({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AppContext.Provider value={[state, dispatch]}>
            {children}
        </AppContext.Provider>
    );

}

export default Context