import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  loginWithEmailPassword,
  logout,
  signInWithGooglePopup,
  signUpWithEmailAndPassword,
} from '../../firebase/firebase.utils';

export const userDetailsSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    saveUserDetail: (_, { payload }) => {
      return payload;
    },
    removeUserDetail: () => {
      return null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(doLogout.fulfilled, () => {
        return null;
      })
      .addCase(emailPasswordSignUp.fulfilled, (_, { payload }) => {
        return payload;
      })
      .addCase(emailPasswordLogin.fulfilled, (_, { payload }) => {
        return payload;
      });
  },
});

export const loginViaGmail = createAsyncThunk(
  'user/gmail-login',
  async (_, { rejectWithValue }) => {
    try {
      const {
        user: { displayName: name, email, uid: userId },
      } = await signInWithGooglePopup();
      return { name, email, userId };
    } catch (ex) {
      return rejectWithValue(ex);
    }
  },
);

export const emailPasswordSignUp = createAsyncThunk(
  'user/signup',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const {
        user: { uid },
      } = await signUpWithEmailAndPassword(email, password);
      return { email, userId: uid };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const emailPasswordLogin = createAsyncThunk(
  'user/emailPasswordLogin',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const {
        user: { uid },
      } = await loginWithEmailPassword(email, password);
      return { userId: uid, email };
    } catch (ex) {
      const { code, message } = ex;
      return rejectWithValue({ code, message });
    }
  },
);

export const doLogout = createAsyncThunk('user/logout', async (_, { rejectWithValue }) => {
  try {
    await logout();
    return null;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const { saveUserDetail, removeUserDetail } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
