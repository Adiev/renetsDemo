import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENT } from './eventConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../async/asyncActions';
import { fetchSampleData } from '../../app/data/mockApi';
import { toastr } from 'react-redux-toastr';

export const createEvent = event => {
  return async dispatch => {
    try {
      dispatch({
        type: CREATE_EVENT,
        payload: {
          event
        }
      });
      toastr.success('Berhasil!', 'Dokumen telah tersimpan');
    } catch (error) {
      toastr.error('Sabar, Ada masalah dikit, silahkan coba lagi');
    }
  };
};

export const updateEvent = event => {
  return async dispatch => {
    try {
      dispatch({
        type: UPDATE_EVENT,
        payload: {
          event
        }
      });
      toastr.success('Berhasil!', 'Perubahan Dokumen telah tersimpan');
    } catch (error) {
      toastr.error('Sabar, Ada masalah dikit pada perubahan, silahkan coba lagi');
    }
  };
};

export const deleteEvent = eventId => {
  return {
    type: DELETE_EVENT,
    payload: {
      eventId
    }
  };
};

export const loadEvents = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      const events = await fetchSampleData();
      dispatch({ type: FETCH_EVENT, payload: { events } });
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  };
};
