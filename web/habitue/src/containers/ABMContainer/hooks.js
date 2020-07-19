import { useSelector, useDispatch } from 'react-redux';
import { 
    LOADED_FAILURE_HABITUES,
    LOADED_HABITUES,
    LOADING_HABITUES,
    PUSHED_FAILURE_HABITUES,
    PUSHED_HABITUES,
    PUSHING_HABITUE
} from './actions';

const useLoadHabitues = () => {
    const dispatch = useDispatch();
    
}