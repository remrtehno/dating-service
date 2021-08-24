import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import appReducer from "./app/reducer";
import feedReducer from "./users/reducer";
import {IFeedState} from "./users/types";
import {IAppState} from "./app/types";
import {IFAQState} from "./faq/types";
import {IOfferState} from "./offer/types";
import {IDialogsState} from "./dialogs/types";
import faqReducer from "./faq/reducer";
import offerReducer from "./offer/reducer";
import dialogsReducer from "./dialogs/reducer";


export interface RootState {
    feed: IFeedState,
    app: IAppState,
    faq: IFAQState,
    offer: IOfferState,
    dialogs: IDialogsState,
}

const reducer = combineReducers({
    app: appReducer,
    feed: feedReducer,
    faq: faqReducer,
    offer: offerReducer,
    dialogs: dialogsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;