import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER,
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE
} from '../constants/auth';

export function loginUser(redirection) {
    return {
        type: LOGIN_USER,
        redirection
    };
}

export function loginUserSuccess(token) {
    return {
        type: LOGIN_USER_SUCCESS,
        token
    };
}

export function loginUserFailure() {
    return {
        type: LOGIN_USER_FAILURE
    };
}

export function logoutUser() {
    return {
        type: LOGOUT_USER
    };
}

export function signupUser() {
    return {
        type: SIGNUP_USER
    };
}

export function signupUserSuccess(token) {
    return {
        type: SIGNUP_USER_SUCCESS,
        token
    };
}

export function signupUserFailure() {
    return {
        type: SIGNUP_USER_FAILURE
    };
}
