import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'user',
  initialState: {
   channelid: null,
   channelname: null,
  },
  reducers: {
    setchannelid: (state, action) => {
      state.app += action.payload;
    },
  },
});

export const { setchannelid, logout } = appSlice.actions;

export const selectchannelid = (state) => state.app.channelid;
export const selectchannelname = (state) => state.app.channelname

export default appSlice.reducer;
