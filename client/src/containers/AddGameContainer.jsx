import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from '../components/Form';
import * as gamesActionCreators from '../actions/games';
import * as filestackActionCreators from '../actions/filestack';


class AddGameContainer extends Component {
    constructor(props) {
        super(props);
    }

    submit = (event) => {
        event.preventDefault();
        this.props.gamesActions.postGame();
        this.props.history.push('/games');
    }

    uploadPicture = () => {
        this.props.filestackActions.uploadPicture();
    }

    render() {
        const { picture } = this.props;
        return (
            <Form
                handleSubmit={this.submit}
                picture={picture}
                uploadPicture={this.uploadPicture}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        picture: state.getIn(['filestack', 'url'], '')
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        gamesActions: bindActionCreators(gamesActionCreators, dispatch),
        filestackActions: bindActionCreators(filestackActionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGameContainer);
