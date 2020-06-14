import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';

import { addNumberTranslatedSuc, addNumberTranslatedFail } from './actions';

interface Action {
  type: string;
  payload: {
    number: number
  }
}
export function* translate({ payload } : Action) {
  try {
    const res = yield call(api.get, `?translate=${payload.number}`);
    window.scroll({
      top: 400,
      left: 0,
      behavior: 'smooth'
    });
    yield put(addNumberTranslatedSuc(res.data))
  } catch (error) {
    console.log(error)
    toast.error('Ops! Only Numbers < 999 nonillion are permitted. ', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    addNumberTranslatedFail()
  }
}