import React, { PureComponent } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { About, Contact, Welcome } from '.';

export default class Home extends PureComponent {
    active(path) {
        if (this.props.location.pathname === path) {
            return 'active';
        }
    }

    render() {
        return (
            <div className="main">
                <div className="site-wrapper">
                    <div className="site-wrapper-inner">
                        <div className="cover-container">
                            <div className="masthead clearfix">
                                <div className="inner">
                                    <nav>
                                        <img className="header-logo" src="https://cdn.filestackcontent.com/nLnmrZQaRpeythR4ezUo" />
                                        <ul className="nav masthead-nav">
                                            <li className={this.active('/')}><Link to="/">Home</Link></li>
                                            <li className={this.active('/about')}><Link to="/about">About</Link></li>
                                            <li className={this.active('/contact')}><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <Switch>
                                <Route path="/" exact component={Welcome} />
                                <Route path="/about" exact component={About} />
                                <Route path="/contact" exact component={Contact} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
