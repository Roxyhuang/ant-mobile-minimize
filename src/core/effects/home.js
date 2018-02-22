import { put, call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { INCREMENT, INCREMENT_ASYNC } from '../../core/actions/actionTypes';

export const delay1 = ms => new Promise((resolve, reject) => {
  if (ms === 3000) {
    resolve('成功');
  } else {
    reject(new Error('not'));
  }
});

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* incrementAsync() {
  // while(true) {
  try {
    yield call(delay, 1000);
    yield put({ type: INCREMENT });
  } catch (e) {
    console.log(e);
  }
  // }
}

// Bootstrap Functions App
export default function* root() {
  yield* takeEvery(INCREMENT_ASYNC, incrementAsync);
}
