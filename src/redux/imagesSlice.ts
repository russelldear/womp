import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IImageFolder } from "../types";

export interface IImagesState {
  isLoading: boolean;
  imageFolders: IImageFolder[]
};

export const initialState: IImagesState = {
  isLoading: true,
  imageFolders: []
};

const images = createSlice({
  name: "images",
  initialState: initialState,
  reducers: {
    getImageFolderSuccessful(state, action: PayloadAction<IImageFolder>) {
      state.isLoading = false

      if (state.imageFolders.some(imageFolder => imageFolder.folderName === action.payload.folderName)) {
// TODO : Replace existing images with new ones.
      } else {
        state.imageFolders.push(action.payload);
      }
    }
  }
});

export const { getImageFolderSuccessful } = images.actions;

export default images.reducer;
