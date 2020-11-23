import React, { useState } from "react";
import { Route, Switch } from 'react-router';
import { useRouteMatch, useHistory } from "react-router-dom";
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
  const history = useHistory();

  const handleMenuClick = (folder: string) => {
    onSetSidebarOpen(false)
    history.push(`/photos/${folder}`);
  }

  if (folders.length === 0) {
    fetch(`/images/imageManifest.txt`)
      .then((response) => response.text())
      .then((response) => {
        const folderNames = response.split(/\r?\n/);
        setFolders(folderNames);
      });
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
            folders.map(folder => {
              return <Route path={`${path}/${folder}`} component={() => <PhotoGallery folder={`${folder}`} />} />
            })
          }
        </Switch>
      </Sidebar>
    </>
  )
}

export default Photos;
