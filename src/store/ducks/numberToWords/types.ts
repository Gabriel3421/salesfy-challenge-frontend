/**
 * Action types
 */

export enum WordsTypes {
  ADD_NEW_NUMBER_REQ = '@words/ADD_NEW_NUMBER_REQ',
  ADD_NEW_NUMBER_SUC = '@words/ADD_NEW_NUMBER_SUC',
  ADD_NEW_NUMBER_FAIL = '@words/ADD_NEW_NUMBER_FAIL',
}

export interface NumberToWords {
  translated: string
}

export interface NumberToWordsState {
  readonly data: NumberToWords[]
}