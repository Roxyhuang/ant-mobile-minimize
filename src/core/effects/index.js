import {
  fork,
} from 'redux-saga/effects';

import indexSaga from './effects/index';

export default function* root() {
  yield fork(indexSaga);
}
