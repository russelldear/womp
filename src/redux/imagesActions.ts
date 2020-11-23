import { ThunkAction } from "redux-thunk";
import { AppState } from "./rootReducer";
import { Action } from "@reduxjs/toolkit";
import { getImageFolderSuccessful } from "./imagesSlice";
import { IImageFolder, IPhoto } from "../types";

const shufflePhotos = (photoArray: IPhoto[]) => {
  var currentIndex = photoArray.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = photoArray[currentIndex];
    photoArray[currentIndex] = photoArray[randomIndex];
    photoArray[randomIndex] = temporaryValue;
  }

  return photoArray;
}

export const getImageFolder = (folder: string): ThunkAction<void, AppState, unknown, Action<string>> => async dispatch => {
  try {
    const imageList: IPhoto[] = [];

    const response = await fetch(`/images/${folder}/imageManifest.txt`);
    const responseText = await response.text();

    const imageDetails = responseText.split(/\r?\n/);

    for (let i = 0; i < imageDetails.length; i++) {
      const imageDetail = imageDetails[i].split(" ");
      if (imageDetail[0] && imageDetail[0].endsWith(".jpg")) {
        imageList.push({
          src: `/images/${folder}/${imageDetail[0]}`,
          width: parseInt(imageDetail[1]),
          height: parseInt(imageDetail[2])
        });
      }
    }

    const result: IImageFolder = {
      folderName: folder,
      imageList: shufflePhotos(imageList)
    }

    dispatch(getImageFolderSuccessful(result));
  } catch {
    console.log("Image folder retrieval failure: ", folder);
  }
};