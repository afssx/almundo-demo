import {combineReducers} from 'redux';
import App from './app';
import Profile from './profile';

const allReducers= combineReducers({
  app: App,
  profile: Profile
});

export default allReducers;