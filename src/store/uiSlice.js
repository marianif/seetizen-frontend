import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showMobileMenu: false,
  },
  reducers: {
    setShowMobileMenu(state, { payload }) {
      state.showMobileMenu = payload;
    },
  },
});

export const { setShowMobileMenu } = uiSlice.actions;
export default uiSlice.reducer;
