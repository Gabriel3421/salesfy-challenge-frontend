import { action } from 'typesafe-actions';
import { WordsTypes} from './types';

export const addNumberTranslatedReq = 
(number: number) => action(WordsTypes.ADD_NEW_NUMBER_REQ, { number });
export const addNumberTranslatedSuc = 
(Translated: Object) => action(WordsTypes.ADD_NEW_NUMBER_SUC, Translated);
export const addNumberTranslatedFail = () => action(WordsTypes.ADD_NEW_NUMBER_FAIL);