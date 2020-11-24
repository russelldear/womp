import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IImageFolder } from "../types";

export interface IImagesState {
  imageFolders: IImageFolder[]
};

export const initialState: IImagesState = {
  imageFolders: []
};

const images = createSlice({
  name: "images",
  initialState: initialState,
  reducers: {
    getImageFolderSuccessful(state, action: PayloadAction<IImageFolder[]>) {
      state.imageFolders = action.payload;
    }
  }
});

export const { getImageFolderSuccessful } = images.actions;

export default images.reducer;
