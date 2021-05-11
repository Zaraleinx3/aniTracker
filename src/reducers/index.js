import { combineReducers } from 'redux';
import { search } from './searchReducer';
import { movieModal } from './movieModal';
import { seriesModal } from './seriesModal';

export default combineReducers({
    search,
    movieModal,
    seriesModal,
})