import React, { useState, useCallback, FunctionComponent } from 'react';
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from "react-images";
import { IPhoto } from './types'
import './App.css';

const PhotoGallery: FunctionComponent<{folder: string}> = (props) => {
  const [photos, setPhotos] = useState<IPhoto[]>([]); 
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

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

  if (photos.length === 0) {
    const photos: IPhoto[] = [];
    fetch(`/images/${props.folder}/imageManifest.txt`)
      .then((response) => response.text())
      .then((response) => {
        const imageDetails = response.split(/\r?\n/);
        for (let i = 0; i < imageDetails.length; i++) {
          const imageDetail = imageDetails[i].split(" ");
          if (imageDetail[0] && imageDetail[0].endsWith(".jpg")) {
            photos.push({
              src: `/images/${props.folder}/${imageDetail[0]}`,
              width: parseInt(imageDetail[1]),
              height: parseInt(imageDetail[2])
            });
          }
        }

        console.log(photos);
        setPhotos(shufflePhotos(photos));
      });
  }

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(photo => ({
                ...photo,
                source: photo.src
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default PhotoGallery;
