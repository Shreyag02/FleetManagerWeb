import { put, takeLatest } from "redux-saga/effects";
import {
  createChannel,
  getChannelInstance,
  getChannelMessages,
  getClientInstance,
  getPublicChannels,
  getUserSubscribedChannels,
  joinChannelBySid,
  getOrCreateChannelInstance,
} from "../../../services/twilio/twilio-service";

import {
  getClientFetch,
  getClientSuccess,
  getClientFailure,
  getGeneralChannelsFetch,
  getGeneralChannelsSuccess,
  getGeneralChannelsFailure,
  getSubscribedChannelsFetch,
  getSubscribedChannelsSuccess,
  getSubscribedChannelsFailure,
  addChannelFetch,
  addChannelSuccess,
  addChannelFailure,
  joinChannelFetch,
  joinChannelSuccess,
  joinChannelFailure,
  setChatChannelFetch,
  setChatChannelSuccess,
  setChatChannelFailure,
  setPersonalChatChannelFetch,
  setPersonalChatChannelSuccess,
  setPersonalChatChannelFailure,
  setChatChannelMessagesFetch,
  setChatChannelMessagesSuccess,
  setChatChannelMessagesFailure,
} from "../../reducers/channelReducer";

function* getClientSaga({ payload }) {
  try {
    const data = yield getClientInstance(payload);

    yield put(getClientSuccess(data));
  } catch (error) {
    yield put(getClientFailure(error));
  }
}

function* getGeneralChannelsSaga({ payload }) {
  try {
    const data = yield getPublicChannels(payload);

    yield put(getGeneralChannelsSuccess(data));
  } catch (error) {
    yield put(getGeneralChannelsFailure(error));
  }
}

function* getSubscribedChannelsSaga({ payload }) {
  try {
    const data = yield getUserSubscribedChannels(payload);

    yield put(getSubscribedChannelsSuccess(data));
  } catch (error) {
    yield put(getSubscribedChannelsFailure(error));
  }
}

function* addChannelSaga({ payload }) {
  try {
    const data = yield createChannel(payload);
    if (data) {
      const client = payload.client;
      yield* getGeneralChannelsSaga({ payload: client });
      yield* getSubscribedChannelsSaga({ payload: client });
    }

    yield put(addChannelSuccess(data));
  } catch (error) {
    yield put(addChannelFailure(error));
  }
}

function* joinChannelSaga({ payload }) {
  try {
    const data = yield joinChannelBySid(payload);
    if (data) {
      const client = payload.client;
      yield* getGeneralChannelsSaga({ payload: client });
      yield* getSubscribedChannelsSaga({ payload: client });
    }

    yield put(joinChannelSuccess(data));
  } catch (error) {
    yield put(joinChannelFailure(error));
  }
}

function* setChatChannelSaga({ payload }) {
  const data = yield getChannelInstance(payload);
  try {
    yield put(setChatChannelSuccess(data));
  } catch (error) {
    yield put(setChatChannelFailure(data));
  }
}

function* setPersonalChatChannelSaga({ payload }) {
  const data = yield getOrCreateChannelInstance(payload);
  try {
    yield put(setPersonalChatChannelSuccess(data));
  } catch (error) {
    yield put(setPersonalChatChannelFailure(data));
  }
}

function* setChatChannelMessagesSaga({ payload }) {
  const data = yield getChannelMessages(payload);
  try {
    yield put(setChatChannelMessagesSuccess(data));
  } catch (error) {
    yield put(setChatChannelMessagesFailure(data));
  }
}

const channelSaga = [
  takeLatest(getClientFetch, getClientSaga),
  takeLatest(getGeneralChannelsFetch, getGeneralChannelsSaga),
  takeLatest(getSubscribedChannelsFetch, getSubscribedChannelsSaga),
  takeLatest(addChannelFetch, addChannelSaga),
  takeLatest(joinChannelFetch, joinChannelSaga),
  takeLatest(setChatChannelFetch, setChatChannelSaga),
  takeLatest(setPersonalChatChannelFetch, setPersonalChatChannelSaga),
  takeLatest(setChatChannelMessagesFetch, setChatChannelMessagesSaga),
];

export default channelSaga;
