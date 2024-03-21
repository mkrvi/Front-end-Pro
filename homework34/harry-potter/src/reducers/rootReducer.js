import { combineReducers } from 'redux';
import searchReducer from "./searchReducer";
import charactersReducer from "./charactersReducer";
import housesReducer from "./housesReducer";

export const rootReducer = combineReducers({
    searchValue:searchReducer,
    houses: housesReducer,
    charactersReducer,
});

