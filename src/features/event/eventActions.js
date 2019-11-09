import { toastr } from 'react-redux-toastr';
import { createNewEvent } from '../../app/common/util/helpers';

export const createEvent = event => {
  return async (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const user = firebase.auth().currentUser;
    const photoURL = getState().firebase.profile.photoURL;
    const newEvent = createNewEvent(user, photoURL, event);
    try {
      let createdEvent = await firestore.add('events', newEvent);
      await firestore.set(`event_attendee/${createdEvent.id}_${user.uid}`, {
        eventId: createdEvent.id,
        userUid: user.uid,
        eventDate: event.date,
        host: true
      });
      toastr.success('Berhasil!', 'Dokumen telah tersimpan');
      return createdEvent;
    } catch (error) {
      toastr.error('Sabar, Ada masalah dikit, silahkan coba lagi');
    }
  };
};

export const updateEvent = event => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    try {
      await firestore.update(`events/${event.id}`, event);
      toastr.success('Berhasil!', 'Perubahan Dokumen telah tersimpan');
    } catch (error) {
      toastr.error('Sabar, Ada masalah dikit pada perubahan, silahkan coba lagi');
    }
  };
};

export const cancelToggle = (cancelled, eventId) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const message = cancelled
    ? 'Yakin akan batalkan kegiatan ini?'
    : 'Kegiatan akan aktif, Anda yakin?';
  try {
    toastr.confirm(message, {
      onOk: async () =>
        await firestore.update(`events/${eventId}`, {
          cancelled: cancelled
        })
    });
  } catch (error) {
    console.log(error);
  }
};
