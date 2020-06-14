import { Reducer } from 'redux';
import { NumberToWordsState, WordsTypes} from './types';


const INITIAL_STATE: NumberToWordsState = {
  data: []
}

const reducer: Reducer<NumberToWordsState> = (state = INITIAL_STATE, action ) =>{

  switch (action.type) {
    case WordsTypes.ADD_NEW_NUMBER_REQ:
      return state
    case WordsTypes.ADD_NEW_NUMBER_SUC:
      return {...state, data: [ ...state.data, action.payload]}
    case WordsTypes.ADD_NEW_NUMBER_FAIL:
      return state
    default:
      return state
  }
}

export default reducer;
