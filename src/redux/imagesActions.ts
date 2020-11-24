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

export const getImageFolders = (): ThunkAction<void, AppState, unknown, Action<string>> => async dispatch => {
  try {
    let imageFolderList: IImageFolder[] = [];

    const response = await fetch(`/images/imageManifest.txt`);
    const responseText = await response.text();
    const imageDetails = responseText.split(/\r?\n/);

    let folders = imageDetails.map(imageDetail => {
      const imagePathSections = imageDetail.split("/");
      return imagePathSections[0];
    });

    folders = folders.filter((value, index, array) => {
      return array.indexOf(value) === index && value !== "";
    }); // Dedupe 

    imageFolderList = folders.map(folder => {
      const imagesInFolder = imageDetails.filter(imageDetail => {
        const imagePathSections = imageDetail.split("/");
        return imagePathSections[0] === folder;
      })
      
      let imageList = imagesInFolder.map(imageInFolder => {
        const imagePathSections = imageInFolder.split("/");
        const imageDetail = imagePathSections[1].split(" ");

        //if (imageDetail[0] && imageDetail[0].endsWith(".jpg")) {
          const image: IPhoto = {
            src: `/images/${folder}/${imageDetail[0]}`,
            width: parseInt(imageDetail[1]),
            height: parseInt(imageDetail[2])
          };
          return image;
        //}
      });

      const imageFolder: IImageFolder = {
        folderName: folder,
        imageList: shufflePhotos(imageList as IPhoto[])
      };
      return imageFolder;
    });

    dispatch(getImageFolderSuccessful(imageFolderList));
  } catch {
    console.log("Image folder retrieval failure");
  }
};