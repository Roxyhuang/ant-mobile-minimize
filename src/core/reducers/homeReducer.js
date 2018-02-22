import * as types from '../actions/actionTypes';
import initialState from '../states/homeInitialState';


export default function homeReducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1,
      };
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
}
