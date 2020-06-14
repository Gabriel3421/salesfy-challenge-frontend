import { all, takeLatest } from 'redux-saga/effects'

import { WordsTypes } from './numberToWords/types'
import { translate } from './numberToWords/sagas'

export default function* rootSaga(){
  return yield all([
    takeLatest(WordsTypes.ADD_NEW_NUMBER_REQ, translate)
  ])
}