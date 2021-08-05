import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import appReducer from "./app/reducer";
import feedReducer from "./users/reducer";
import {IFeedState} from "./users/types";
import {IAppState} from "./app/types";


export interface RootState {
    feed: IFeedState,
    app: IAppState,
}

const reducer = combineReducers({
    app: appReducer,
    feed: feedReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;