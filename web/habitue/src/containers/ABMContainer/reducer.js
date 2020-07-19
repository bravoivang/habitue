import {
    LOADING_HABITUES,
    LOADED_HABITUES,
    LOADED_FAILURE_HABITUES,
    PUSHING_HABITUE,
    PUSHED_HABITUES,
    PUSHED_FAILURE_HABITUES,
} from './actions';

const initial = {
    loading : false,
    habitues : []
}

export const AMBreducer = (prevState = initial, action) => {
    switch (action.type) {
        case LOADING_HABITUES : {
            return {
                ...prevState
            }
        }
        case LOADED_HABITUES : {
            return {
                ...prevState
            }
        }
        case LOADED_FAILURE_HABITUES : {
            return {
                ...prevState
            }
        }
        case PUSHING_HABITUE : {
            return {
                ...prevState
            }
        }
        case PUSHED_HABITUES : {
            return {
                ...prevState
            }
        }
        case PUSHED_FAILURE_HABITUES : {
            return {
                ...prevState
            }
        }
        default : {
            return prevState;
        }
    }
}