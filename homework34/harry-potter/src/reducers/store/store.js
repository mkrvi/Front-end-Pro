import {createStore,applyMiddleware, compose} from "redux";
import { rootReducer } from "../rootReducer";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger'


const logger = createLogger();

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const middlewareEnhancer = applyMiddleware(...middlewares);
const composeEnhancer = compose(middlewareEnhancer);

export const store = createStore(rootReducer, composeEnhancer);


