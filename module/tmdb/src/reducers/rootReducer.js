import { combineReducers } from 'redux'
import genresReducer from "./genresReducer";
import moviesReducer from "./moviesReducer";
import languageReducer from "./languageReducer";
import pageReducer from "./pageReducer";
import searchReducer from "./searchReducer";
import formReducer from "./formReducer";
export const rootReducer = combineReducers({
    genres:genresReducer,
    movies: moviesReducer,
    languages:languageReducer,
    page: pageReducer,
    searchValue: searchReducer,
    formData: formReducer,
})