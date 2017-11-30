import React, { PureComponent } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { push } from 'react-router-redux';
import { AddGameContainer, GamesContainer } from '../containers';
import { Login, Signup } from '../components';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

const options = {
    authenticatedSelector: state => state.get('auth').toJS().isAuthenticated,
    redirectPath: '/auth/login',
    wrapperDisplayName: 'UserIsJWTAuthenticated'
};
const requireAuthentication = connectedRouterRedirect(options);

export default class Archive extends PureComponent {
    render() {
        return (
            <div className="view">
                <nav className="navbar navbar-inverse">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <Link className="navbar-brand" to="/">
                                <img src="https://cdn.filestackcontent.com/nLnmrZQaRpeythR4ezUo" className="header-logo" />
                            </Link>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route path="/auth/login" component={Login} />
                    <Route path="/auth/signup" component={Signup} />
                    <Route path="/games/add" component={requireAuthentication(AddGameContainer)} />
                    <Route path="/games" exact component={GamesContainer} />
                </Switch>

                <footer className="text-center">
                    <p>@ 2017 Erik Ferlanti</p>
                </footer>
            </div>
        )
    }
}
