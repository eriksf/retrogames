import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import ReduxToastr from 'react-redux-toastr';
import configureStore, { hashHistory } from './store';
import { Home, Archive } from './components';

const store = configureStore();

const routes = (
    <Provider store={store}>
        <div className="wrapper">
            <ConnectedRouter history={hashHistory}>
                <Switch>
                    <Route path="/auth" component={Archive} />
                    <Route path="/games" component={Archive} />
                    <Route path="/" component={Home} />
                </Switch>
            </ConnectedRouter>
            <ReduxToastr
                timeOut={2000}
                newestOnTop={false}
                preventDuplicates={true}
                position="top-right"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
            />
        </div>
    </Provider>
);

export default routes;
