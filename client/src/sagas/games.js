import { takeLatest, delay } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import { GET_GAMES, DELETE_GAME, POST_GAME } from '../constants/games';
import {
    getGamesSuccess,
    getGamesFailure,
    deleteGameSuccess,
    deleteGameFailure,
    postGameSuccess,
    postGameFailure
} from '../actions/games';

const selectedGames = (state) => {
    return state.getIn(['games', 'list']).toJS();
}

const selectedPicture = (state) => {
    return state.getIn(['filestack', 'url'], '');
}

const fetchGames = () => {
    return fetch('http://localhost:8080/games', {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
};

const deleteServerGame = (id) => {
    return fetch(`http://localhost:8080/games/${id}`, {
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            }),
            method: 'DELETE',
        })
        .then(response => response.json());
};

const postServerGame = (game) => {
    return fetch('http://localhost:8080/games', {
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            }),
            method: 'POST',
            body: JSON.stringify(game)
        })
        .then(response => response.json());
};

// yield call to fetchGames is in a try/catch to control the flow even when the promise rejects
function* getGames() {
    try {
        const games = yield call(fetchGames);
        yield put(getGamesSuccess(games));
    } catch (err) {
        yield put(getGamesFailure());
    }
}

function* deleteGame(action) {
    console.log('ACTION: ' + JSON.stringify(action));
    const { id } = action;
    console.log('ID: ' + id);
    const games = yield select(selectedGames);
    console.log('GAMES: ' + JSON.stringify(games));
    try {
        yield call(deleteServerGame, id);
        yield put(deleteGameSuccess(games.filter(game => game._id !== id)));
    } catch (e) {
        yield put(deleteGameFailure());
    }
}

const getGameForm = (state) => {
    return state.getIn(['form', 'game']).toJS();
}

function* postGame() {
    const picture = yield select(selectedPicture);
    console.log('PICTURE: ' + picture);
    const game = yield select(getGameForm);
    console.log('GAME: ' + JSON.stringify(game));
    const newGame = Object.assign({}, { picture }, game.values);
    console.log('NEW: ' + JSON.stringify(newGame));
    try {
        yield call(postServerGame, newGame);
        yield put(postGameSuccess());
    } catch (e) {
        yield put(postGameFailure());
    }
}

// the watcher saga waits for dispatched GET_GAMES actions
function* watchGetGames() {
    yield takeLatest(GET_GAMES, getGames);
}

function* watchDeleteGame() {
    yield takeLatest(DELETE_GAME, deleteGame);
}

function* watchPostGame() {
    yield takeLatest(POST_GAME, postGame);
}

// Export the watcher to be run in parallel in sagas/index.js
export { watchGetGames, watchDeleteGame, watchPostGame };
