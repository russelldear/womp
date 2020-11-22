import React, { useState } from "react";
import { Route, Switch } from 'react-router';
import { useRouteMatch } from "react-router-dom";
import Sidebar from "react-sidebar";
import PhotoGallery from "./PhotoGallery"
import './App.css';

const Photos = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  let { path } = useRouteMatch();

  const onSetSidebarOpen = (open: boolean) => {
    setSidebarOpen(open);
  }

  return (
    <Sidebar
      sidebar={
        <div>
          <div className="menu-close">
            <button className="menu-button" onClick={() => onSetSidebarOpen(false)}>
              <i className="material-icons md-light md-36">keyboard_arrow_left</i>
            </button>
          </div>
          <div className="menu-item-container">
            <div className="menu-item">
              <a href="#/photos/music">music</a>
            </div>
            <div className="menu-item">
              <a href="#/photos/taytay">taytay</a>
            </div>
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
        <Route path={`${path}/music`} component={() => <PhotoGallery folder="music" />} />
        <Route path={`${path}/taytay`} component={() => <PhotoGallery folder="taytay" />} />
      </Switch>
    </Sidebar>
  )
}

export default Photos;
