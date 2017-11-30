import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import { Modal, GamesListManager } from '../components';
import * as gamesActionCreators from '../actions/games';
import * as authActionCreators from '../actions/auth';
import { toastr } from 'react-redux-toastr';

class GamesContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getGames();
    }

    toggleModal = (id) => {
        this.props.gamesActions.showSelectedGame(this.props.games.find(game => game._id === id));
        $('#game-modal').modal();
    }

    getGames() {
        this.props.gamesActions.getGames();
    }

    deleteGame = (id) => {
        this.props.gamesActions.deleteGame(id);
    }

    setSearchBar = (event) => {
        this.props.gamesActions.setSearchBar(event.target.value.toLowerCase());
    }

    logout = () => {
        this.props.authActions.logoutUser();
        toastr.success('Retrogame archive', 'You are now logged out');
        localStorage.removeItem('token');
    }

    render() {
        const { games, searchBar, selectedGame, userName, authActions } = this.props;
        return (
            <div>
                <Modal game={selectedGame} />
                <GamesListManager
                    games={games}
                    searchBar={searchBar}
                    setSearchBar={this.setSearchBar}
                    toggleModal={this.toggleModal}
                    deleteGame={this.deleteGame}
                    userName={userName}
                    logout={this.logout}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        games: state.getIn(['games', 'list'], Immutable.List()).toJS(),
        searchBar: state.getIn(['games', 'searchBar'], ''),
        selectedGame: state.getIn(['games', 'selectedGame'], Immutable.List()).toJS(),
        userName: state.getIn(['auth', 'name'])
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        gamesActions: bindActionCreators(gamesActionCreators, dispatch),
        authActions: bindActionCreators(authActionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer);
