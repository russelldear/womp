import React, { useState } from "react";
import { Route, Switch } from 'react-router';
import { useRouteMatch } from "react-router-dom";
import Sidebar from "react-sidebar";
import PhotoGallery from "./PhotoGallery"
import './App.css';

const Photos = () => {
  const [folders, setFolders] = useState<string[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  let { path } = useRouteMatch();

  const onSetSidebarOpen = (open: boolean) => {
    setSidebarOpen(open);
  }

  if (folders.length === 0) {
    fetch(`/images/imageManifest.txt`)
      .then((response) => response.text())
      .then((response) => {
        const folderNames = response.split(/\r?\n/);
        setFolders(folderNames);
      });
  }
  else {
    console.log("got folders");
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
                folders.map(folder => {
                  return <div className="menu-item"><a href={`#/photos/${folder}`}>{`${folder}`}</a></div>
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
      </Sidebar>
      <Switch>
        {
          folders.map(folder => {
            return <Route path={`${path}/${folder}`} component={() => <PhotoGallery folder={`${folder}`} />} />
          })
        }
      </Switch>
    </>
  )
}

export default Photos;
