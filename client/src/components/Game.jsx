import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';

const visibleOnlyLoggedIn = connectedAuthWrapper({
    authenticatedSelector: state => state.get('auth').toJS().isAuthenticated,
    wrapperDisplayName: 'VisibleOnlyLoggedIn'
});

const DeleteButton = visibleOnlyLoggedIn((props) => <button className="btn btn-danger" role="button" onClick={() => props.deleteGame(props.id)}>Delete</button>);

export default class Game extends Component {
    render() {
        const { _id, i, name, description, picture, toggleModal, deleteGame } = this.props;
        return (
            <div className="col-md-4">
                <div className="thumbnail">
                    <div className="thumbnail-frame">
                        <img src={picture} alt="..." className="img-responsive thumbnail-pic" />
                    </div>
                    <div className="caption">
                        <h5>{name}</h5>
                        <p className="description-thumbnail">{`${description.substring(0, 150)}...`}</p>
                        <div className="btn-group" role="group" aria-label="...">
                            <button className="btn btn-success" role="button" onClick={() => toggleModal(_id)}>View</button>
                            <DeleteButton deleteGame={deleteGame} id={_id} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
