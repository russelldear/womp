import React, { useState } from 'react';
import Gallery from 'react-photo-gallery'
import { IPhoto } from './types'
import './App.css';

function Photos() {
  const [xphotos, setPhotos] = useState<IPhoto[]>([]);

  if (xphotos.length === 0) {
    const photos: IPhoto[] = [];
    fetch('/images/imageManifest.txt')
      .then((response) => response.text())
      .then((response) => {
        const imageDetails = response.split(/\r?\n/);
        for (let i = 0; i < imageDetails.length; i++) {
          const imageDetail = imageDetails[i].split(" ");
          if (imageDetail[0] && imageDetail[0] !== "/images/") {
            photos.push({
              src: `/images/${imageDetail[0]}`,
              width: parseInt(imageDetail[1]),
              height: parseInt(imageDetail[2])
            });
          }
        }

        console.log(photos);
        setPhotos(photos);
      });
  }

  return (
    <div>
      <Gallery photos={xphotos} />
    </div>
  );
}

export default Photos;
