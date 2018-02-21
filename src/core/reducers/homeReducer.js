import * as types from '../actions/actionTypes';


const initialState = {
  number: 1,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return state.number + 1;
    case types.DECREMENT:
      return state.number - 1;
    default:
      return state;
  }
}


