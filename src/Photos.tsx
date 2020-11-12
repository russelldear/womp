import React, { useState, useEffect } from 'react';
import Gallery from 'react-photo-gallery'
import { IPhoto } from './types'
import './App.css';

function Photos() {
  const [xphotos, setPhotos] = useState<IPhoto[]>([]);

  useEffect(() => {
    
  });

  if (xphotos.length === 0) {
    const photos: IPhoto[] = [];
    fetch('/images/imageManifest.txt')
        .then((response) => response.text())
        .then((response) => {
          const imageDetails = response.split(/\r?\n/);
          for (let i = 0; i < imageDetails.length; i++) {
            const imageDetail = imageDetails[i].split(" ");
            const imageName = imageDetail[0];
            if (imageName !== "imageManifest.txt") {
              photos.push({ 
                src: `/images/${imageName}`, 
                width: parseInt(imageDetail[1]), 
                height: parseInt(imageDetail[2])
              })
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
