import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export interface State {
  messages: object;
  loading: boolean;
}

const initialState: State = {
  messages: {},
  loading: false,
};

const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    getMessage: (state, action: PayloadAction<State>) => {
      state.loading = true;
      state.messages = action.payload;
    },
    getMessageSuccess: (state, action: PayloadAction<State>) => {
      state.loading = false;
      state.messages = action.payload;
    },
    getMessageFailed: (state) => {
      state.loading = false;
    },
    SETMessage: (state) => {
      state.messages = {};
    },
  },
});

export const socketActions = socketSlice.actions;

// Selectors
export const selectMessage = (state: RootState) => state.socket.messages;

const socketReducer = socketSlice.reducer;
export default socketReducer;
