import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form/immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActionCreators from '../actions/auth';

class Login extends PureComponent {
    login() {
        console.log('PROPS: ' + JSON.stringify(this.props));
        const search = decodeURIComponent(this.props.location.search);
        console.log('SEARCH: ' + search);
        let next = '';
        if (search !== '') {
            next = search.replace("?redirect=", "");
        }
        console.log('NEXT: ' + next);
        this.props.authActions.loginUser(next || '/games');
    }

    render() {
        const { picture, uploadPicture } = this.props;
        return (
            <div className="row scrollable">
                <div className="col-md-offset-2 col-md-8">
                    <div className="text-left">
                        <Link to="/games" className="btn btn-info">Back</Link>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h2 className="panel-title text-center">Login</h2>
                        </div>
                        <div className="panel-body">
                            <form>
                                <div className="form-group text-left">
                                    <label htmlFor="name">Name</label>
                                    <Field
                                        name="email"
                                        type="text"
                                        className="form-control"
                                        component="input"
                                        placeholder="Enter the name"
                                    />
                                </div>
                                <div className="form-group text-left">
                                    <label htmlFor="password">Password</label>
                                    <Field
                                        name="password"
                                        type="password"
                                        component="input"
                                        className="form-control"
                                        placeholder="Enter the password"
                                    />
                                </div>
                                <button type="button" className="btn btn-submit btn-block" onClick={() => this.login()}>
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authActions: bindActionCreators(authActionCreators, dispatch)
    };
}

export default reduxForm({ form: 'login' })(connect(null, mapDispatchToProps)(Login));
