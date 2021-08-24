import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ROUTES } from './config/constants';
import { getConfig } from './store/app/actions';
import { login } from './store/auth/actions';
import { getFaq } from './store/faq/actions';
import Header from './components/Header/Header';
import './index.css';

const Main = lazy(() => import('./pages/Main/Main'));
const Dialogs = lazy(() => import('./pages/Dialogs/Dialogs'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const Settings = lazy(() => import('./pages/Settings/Settings'));
const Feedback = lazy(() => import('./pages/Feedback/Feedback'));
const Gallery = lazy(() => import('./pages/Gallery/Gallery'));
const Offer = lazy(() => import('./pages/Offer/Offer'));
const User = lazy(() => import('./pages/User/User'));
const Chat = lazy(() => import('./pages/Chat/Chat'));
const FAQ = lazy(() => import('./pages/FAQ/FAQ'));

const App = () => {
    const dispatch = useDispatch();

    dispatch(getConfig());
    dispatch(login());
    dispatch(getFaq());

    return (
        <div className="app">
            <Header title="Знакомства"/>
            <Suspense fallback={<div>{123}</div>}>
                <Switch>
                    <Route path={ROUTES.Dialogs} render={() => <Dialogs/>} />
                    <Route path={ROUTES.Profile} render={() => <Profile/>} />
                    <Route path={ROUTES.Settings} render={() => <Settings/>} />
                    <Route path={ROUTES.Feedback} render={() => <Feedback/>} />
                    <Route path={ROUTES.Gallery} render={() => <Gallery/>} />
                    <Route path={ROUTES.Offer} render={() => <Offer/>} />
                    <Route path={ROUTES.User} render={() => <User/>} />
                    <Route path={ROUTES.Chat} render={() => <Chat/>} />
                    <Route path={ROUTES.FAQ} render={() => <FAQ/>} />
                    <Route path={ROUTES.Main} render={() => <Main/>} />
                </Switch>
            </Suspense>
        </div>
    );
}

export default App;
