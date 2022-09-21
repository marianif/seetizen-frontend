import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: null,
    avatarUrl: null,
    groups: [],
    isUsingAs: null, // 'user || 'group'
    isReady: false,
    currentGroup: null,
    hasPermission: false,
  },
  reducers: {
    setCurrentUser(state, { payload }) {
      state.name = payload.name;
      state.avatarUrl = payload.avatarUrl;
      state.isUsingAs = payload.usingAs;
      state.groups.push(...payload.groups);
      state.isReady = true;
    },
    setCurrentGroup(state, { payload }) {
      state.currentGroup = { ...payload.currentGroup };
      state.isUsingAs = payload.usingAs;
    },
    setPermission(state, { payload }) {
      state.hasPermission = payload;
    },
  },
});

export const { setCurrentUser, setCurrentGroup, setPermission } =
  userSlice.actions;
export default userSlice.reducer;
