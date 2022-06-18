import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: null,
  publicChannels: [],
  subscribedChannels: [],
  chatChannel: null,
  channelMessages: [],
  messageLoading: false,
  channelLoading: false,
  error: null,
  isLoading: false,
};

export const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    getClientFetch: (state) => {
      state.isLoading = true;
    },
    getClientSuccess: (state, action) => {
      state.client = action.payload;
      state.isLoading = false;
    },
    getClientFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    getGeneralChannelsFetch: (state) => {
      state.isLoading = true;
    },
    getGeneralChannelsSuccess: (state, action) => {
      state.publicChannels = action.payload;
      state.isLoading = false;
    },
    getGeneralChannelsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    getSubscribedChannelsFetch: (state) => {
      state.isLoading = true;
    },
    getSubscribedChannelsSuccess: (state, action) => {
      state.subscribedChannels = action.payload;
      state.isLoading = false;
    },
    getSubscribedChannelsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    addChannelFetch: (state) => {
      state.isLoading = true;
    },
    addChannelSuccess: (state) => {
      // state.subscribedChannels = action.payload;
      state.isLoading = false;
    },
    addChannelFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    joinChannelFetch: (state) => {
      state.isLoading = true;
    },
    joinChannelSuccess: (state) => {
      state.isLoading = false;
    },
    joinChannelFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    setChatChannelFetch: (state) => {
      state.channelLoading = true;
    },
    setChatChannelSuccess: (state, action) => {
      state.chatChannel = action.payload;
      state.channelLoading = false;
    },
    setChatChannelFailure: (state, action) => {
      state.channelLoading = false;
      state.error = action.payload;
    },

    setPersonalChatChannelFetch: (state) => {
      state.channelLoading = true;
    },
    setPersonalChatChannelSuccess: (state, action) => {
      state.chatChannel = action.payload;
      state.channelLoading = false;
    },
    setPersonalChatChannelFailure: (state, action) => {
      state.channelLoading = false;
      state.error = action.payload;
    },

    setChatChannelMessagesFetch: (state) => {
      state.messageLoading = true;
    },
    setChatChannelMessagesSuccess: (state, action) => {
      state.channelMessages = action.payload;
      state.messageLoading = false;
    },
    setChatChannelMessagesFailure: (state, action) => {
      state.messageLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
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
} = channelSlice.actions;

export default channelSlice.reducer;
