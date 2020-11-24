import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router';
import { useRouteMatch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from './redux/rootReducer';
import Sidebar from "react-sidebar";
import { getImageFolder as getImageFolders } from './redux/imagesActions';
import PhotoGallery from "./PhotoGallery"
import './App.css';

const Photos = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const {
    imageFolders
  } = useSelector((state: AppState) => state.images);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!imageFolders) {
      dispatch(getImageFolders());
    }
  }, [imageFolders, dispatch]);

  const { path } = useRouteMatch();

  const onSetSidebarOpen = (open: boolean) => {
    setSidebarOpen(open);
  }
  const history = useHistory();

  const handleMenuClick = (folder: string) => {
    onSetSidebarOpen(false)
    history.push(`/photos/${folder}`);
  }

  const getFolders = () => {
    if (imageFolders) {
      return imageFolders.map(imageFolder => imageFolder.folderName);
    }
    return [];
  }

  return (
    <>
      <Sidebar
        sidebar={
          <div>
            <div className="menu-close">
              <button className="menu-button" onClick={() => onSetSidebarOpen(false)}>
                <i className="material-icons md-light md-36">keyboard_arrow_left</i>
              </button>
            </div>
            <div className="menu-item-container">
              {
                getFolders().map(folder => {
                  return (
                    <div className="menu-item">
                      <button className="menu-button" onClick={() => handleMenuClick(`${folder}`)}>{`${folder}`}</button>
                    </div>
                  )
                })
              }
            </div>
          </div>
        }
        open={sidebarOpen}
        onSetOpen={onSetSidebarOpen}
        styles={{ sidebar: { background: "black" } }}
      >
        <button className="menu-button" onClick={() => onSetSidebarOpen(true)}>
          <i className="material-icons md-light md-36">menu</i>
        </button>
        <Switch>
          {
            getFolders().map(folder => {
              return <Route path={`${path}/${folder}`} component={() => <PhotoGallery folder={`${folder}`} />} />
            })
          }
        </Switch>
      </Sidebar>
    </>
  )
}

export default Photos;
