import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type state = {
  user: null | Record<string, any>;
  verificationId: string;
};
const initialState: state = {
  user: null,
  verificationId:
    "AD8T5IuOq7avsZ4Cz32PNqDdE5YIR0jv3BJoy0HKcomhmOB8clhgnzj6pokxUSeBLsSPDVQYZCkC12TSaWVjjBM8EwfHonIfNCFY3J5DR2whOs0v6Scm1Gtxcvzn52unG5s_KFhead_BPxh2QdfHFXhnahbaFRVeWdg6I0YPe4DKiT6QGbAhiD546kpgpU--502TEK4n2Qp0DRZ5QU0_Y52KKWO6BmRwbnH83hBDG_X-HfnM6SWldJk",
};
const authSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<Record<string, any>>) {
      state.user = action.payload;
    },
    setVerificationId(state, action: PayloadAction<string>) {
      state.verificationId = action.payload;
    },
  },
});

export const { setUser, setVerificationId } = authSlice.actions;
export default authSlice.reducer;
