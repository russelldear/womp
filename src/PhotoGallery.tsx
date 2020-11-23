import React, { useState, useCallback, FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from './redux/rootReducer';
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from "react-images";
import './App.css';
import { getImageFolder } from './redux/imagesActions';
import { IPhoto } from './types';

const PhotoGallery: FunctionComponent<{ folder: string }> = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const {
    imageFolders
  } = useSelector((state: AppState) => state.images);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!imageFolders || !imageFolders.some(imageFolder => imageFolder.folderName === props.folder)) {
      dispatch(getImageFolder(props.folder));
    }
  }, [imageFolders, dispatch]);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const getImages = () => {
    if (imageFolders && imageFolders.some(imageFolder => imageFolder.folderName === props.folder)) {
      const imageFolder = imageFolders.filter(imageFolder => imageFolder.folderName === props.folder);

      const imageListCopy = imageFolder[0].imageList.map(image => {
        const copiedImage: IPhoto = {
          src: image.src,
          width: image.width,
          height: image.height
        }
        return copiedImage;
      });

      return imageListCopy;
    }
    return [];
  }

  return (
    <div>
      <Gallery photos={getImages()} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={getImages().map(photo => ({
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
