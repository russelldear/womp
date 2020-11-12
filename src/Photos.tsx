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
          const imageNames = response.split(/\r?\n/);
          for (let i = 0; i < imageNames.length; i++) {
            const imageName = imageNames[i];
            if (imageName !== "imageManifest.txt") {
              photos.push({ src: `/images/${imageName}`, width: 1, height: 1})
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
