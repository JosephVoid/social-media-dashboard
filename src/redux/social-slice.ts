import { SocialCard } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: SocialCard[] = [];

export const socialSlice = createSlice({
  name: "socials",
  initialState,
  reducers: {
    addSocial: (state, action: PayloadAction<SocialCard>) => {
      state.push(action.payload);
    },
    removeSocial: (state, action: PayloadAction<string>) => {
      state = state.filter((social) => social.id === action.payload);
    },
    editSocial: (
      state,
      action: PayloadAction<{ id: string; social: SocialCard }>
    ) => {
      const updatedSocial = action.payload.social;
      const toBeUpdatedId = action.payload.id;
      state = state.map((social) =>
        social.id === toBeUpdatedId ? { ...social, ...updatedSocial } : social
      );
    },
  },
});

export const { addSocial, removeSocial, editSocial } = socialSlice.actions;

export default socialSlice.reducer;
