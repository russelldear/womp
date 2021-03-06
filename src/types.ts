export interface IPhoto {
  src: string;
  width: number;
  height: number;
}

export interface IImage {
  source: string;
  caption: string;
}

export interface IImageFolder {
  folderName: string;
  imageList: IPhoto[];
}