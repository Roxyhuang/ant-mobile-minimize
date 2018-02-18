import { combineReducers } from 'redux';
import global from './globalReducer';
import home from './homeReducer';
import recommand from './recommandReducer';
// import entities from './entities'

const rootReducer = combineReducers({
  global,
  home,
  recommand,
});

export default rootReducer;

