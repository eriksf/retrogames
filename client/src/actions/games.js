import { GET_GAMES,
         GET_GAMES_SUCCESS,
         GET_GAMES_FAILURE,
         DELETE_GAME,
         DELETE_GAME_SUCCESS,
         DELETE_GAME_FAILURE,
         POST_GAME,
         POST_GAME_SUCCESS,
         POST_GAME_FAILURE,
         SET_SEARCH_BAR,
         SHOW_SELECTED_GAME } from '../constants/games';

export function getGames() {
    return {
        type: GET_GAMES
    };
}

export function getGamesSuccess(games) {
    return {
        type: GET_GAMES_SUCCESS,
        games
    };
}

export function getGamesFailure() {
    return {
        type: GET_GAMES_FAILURE
    };
}

export function setSearchBar(keyword) {
    return {
        type: SET_SEARCH_BAR,
        keyword
    };
}

export function showSelectedGame(game) {
    return {
        type: SHOW_SELECTED_GAME,
        game
    };
}

export function deleteGame(id) {
    return {
        type: DELETE_GAME,
        id
    };
}

export function deleteGameSuccess(games) {
    return {
        type: DELETE_GAME_SUCCESS,
        games
    };
}

export function deleteGameFailure() {
    return {
        type: DELETE_GAME_FAILURE
    };
}

export function postGame() {
    return {
        type: POST_GAME
    };
}

export function postGameSuccess() {
    return {
        type: POST_GAME_SUCCESS
    };
}

export function postGameFailure() {
    return {
        type: POST_GAME_FAILURE
    };
}
