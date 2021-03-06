import Immutable from 'immutable';
import { GET_GAMES_SUCCESS,
         GET_GAMES_FAILURE,
         DELETE_GAME_SUCCESS,
         DELETE_GAME_FAILURE,
         SET_SEARCH_BAR,
         SHOW_SELECTED_GAME } from '../constants/games';

const initialState = Immutable.Map();

export default (state = initialState, action) => {
    switch (action.type) {
        case DELETE_GAME_SUCCESS:
        case GET_GAMES_SUCCESS:
            return state.merge({ list: action.games });
        case DELETE_GAME_FAILURE:
        case GET_GAMES_FAILURE:
            return state.clear();
        case SET_SEARCH_BAR:
            return state.merge({ searchBar: action.keyword });
        case SHOW_SELECTED_GAME:
            return state.merge({ selectedGame: action.game });
        default:
            return state;
    }
}
