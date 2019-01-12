import { combineReducers } from 'redux';
import home from './home.reducer';
import app from './app.reducer';

export default combineReducers({
    home,
    app,
})