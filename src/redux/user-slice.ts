import { User } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: User = { username: "", displayName: "" };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.username = action.payload.username;
      state.displayName = action.payload.displayName;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
