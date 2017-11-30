import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';

class AddGamePanel extends PureComponent {
    render() {
        const { userName, logout } = this.props;
        return (
            <div className="add-game-panel">
                <h5>Welcome back {userName}, <span onClick={logout}>Logout</span></h5>
                <Link to="/games/add" className="btn btn-danger">add a new Game!</Link>
            </div>
        );
    }
}

const options = {
    authenticatedSelector: state => state.get('auth').toJS().isAuthenticated,
    wrapperDisplayName: 'authAddGame',
    FailureComponent: () => {
        return (
            <div className="btn-group" role="group" aria-label="...">
                <Link to="/auth/signup" className="btn btn-primary">Sign up</Link>
                <Link to="/auth/login" className="btn btn-danger">Login</Link>
            </div>
        );
    }
};

export default connectedAuthWrapper(options)(AddGamePanel);
