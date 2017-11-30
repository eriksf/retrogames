import { UPLOAD_PICTURE,
         UPLOAD_PICTURE_SUCCESS,
         UPLOAD_PICTURE_FAILURE } from '../constants/filestack';

export function uploadPicture() {
    return {
        type: UPLOAD_PICTURE
    };
}

export function uploadPictureSuccess(url) {
    return {
        type: UPLOAD_PICTURE_SUCCESS,
        url
    };
}

export function uploadPictureFailure() {
    return {
        type: UPLOAD_PICTURE_FAILURE
    };
}
