import React, { FunctionComponent, useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from "react-images";
import './App.css';
import { IPhoto } from './types';

const PhotoGallery: FunctionComponent<{ images: IPhoto[] }> = (props) => {
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

  const getMutableImages = (): IPhoto[] => {
    return JSON.parse(JSON.stringify(props.images));
  }

  return (
    <div>
      <Gallery photos={getMutableImages()} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={getMutableImages().map(photo => ({
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
