import React from 'react';
import './App.css';
import mainimage from './rdlamp.jpg';

function Landing() {
  return (
    <div className="app">
      <div className="link-container">
        <div className="link">
          <a target="_blank" rel="noreferrer" href="https://facebook.com/russelldear">
            <svg id="icon-906" viewBox="0 0 40 40"><path d="M27.2,4.7v4.9h-2.9c-1.1,0-1.8,0.2-2.1,0.6c-0.4,0.5-0.6,1.1-0.6,2v3.5H27l-0.7,5.4h-4.7v14H16v-14h-4.7v-5.4H16v-4.1 c0-2.3,0.6-4.1,1.9-5.3s2.9-1.9,5.2-1.9C24.8,4.4,26.2,4.5,27.2,4.7L27.2,4.7z"></path></svg>
          </a>
        </div>
        <div className="link">
          <a target="_blank" rel="noreferrer" href="https://instagram.com/russelldear">
            <svg id="icon-910" viewBox="0 0 40 40"><path d="M20,7c4.2,0,4.7,0,6.3,0.1c1.5,0.1,2.3,0.3,3,0.5C30,8,30.5,8.3,31.1,8.9c0.5,0.5,0.9,1.1,1.2,1.8c0.2,0.5,0.5,1.4,0.5,3 C33,15.3,33,15.8,33,20s0,4.7-0.1,6.3c-0.1,1.5-0.3,2.3-0.5,3c-0.3,0.7-0.6,1.2-1.2,1.8c-0.5,0.5-1.1,0.9-1.8,1.2 c-0.5,0.2-1.4,0.5-3,0.5C24.7,33,24.2,33,20,33s-4.7,0-6.3-0.1c-1.5-0.1-2.3-0.3-3-0.5C10,32,9.5,31.7,8.9,31.1 C8.4,30.6,8,30,7.7,29.3c-0.2-0.5-0.5-1.4-0.5-3C7,24.7,7,24.2,7,20s0-4.7,0.1-6.3c0.1-1.5,0.3-2.3,0.5-3C8,10,8.3,9.5,8.9,8.9 C9.4,8.4,10,8,10.7,7.7c0.5-0.2,1.4-0.5,3-0.5C15.3,7.1,15.8,7,20,7z M20,4.3c-4.3,0-4.8,0-6.5,0.1c-1.6,0-2.8,0.3-3.8,0.7 C8.7,5.5,7.8,6,6.9,6.9C6,7.8,5.5,8.7,5.1,9.7c-0.4,1-0.6,2.1-0.7,3.8c-0.1,1.7-0.1,2.2-0.1,6.5s0,4.8,0.1,6.5 c0,1.6,0.3,2.8,0.7,3.8c0.4,1,0.9,1.9,1.8,2.8c0.9,0.9,1.7,1.4,2.8,1.8c1,0.4,2.1,0.6,3.8,0.7c1.6,0.1,2.2,0.1,6.5,0.1 s4.8,0,6.5-0.1c1.6-0.1,2.9-0.3,3.8-0.7c1-0.4,1.9-0.9,2.8-1.8c0.9-0.9,1.4-1.7,1.8-2.8c0.4-1,0.6-2.1,0.7-3.8 c0.1-1.6,0.1-2.2,0.1-6.5s0-4.8-0.1-6.5c-0.1-1.6-0.3-2.9-0.7-3.8c-0.4-1-0.9-1.9-1.8-2.8c-0.9-0.9-1.7-1.4-2.8-1.8 c-1-0.4-2.1-0.6-3.8-0.7C24.8,4.3,24.3,4.3,20,4.3L20,4.3L20,4.3z"></path><path d="M20,11.9c-4.5,0-8.1,3.7-8.1,8.1s3.7,8.1,8.1,8.1s8.1-3.7,8.1-8.1S24.5,11.9,20,11.9z M20,25.2c-2.9,0-5.2-2.3-5.2-5.2 s2.3-5.2,5.2-5.2s5.2,2.3,5.2,5.2S22.9,25.2,20,25.2z"></path><path d="M30.6,11.6c0,1-0.8,1.9-1.9,1.9c-1,0-1.9-0.8-1.9-1.9s0.8-1.9,1.9-1.9C29.8,9.7,30.6,10.5,30.6,11.6z"></path></svg>
          </a>
        </div>
        <div className="link">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/russelldear">
            <svg id="icon-90b" viewBox="0 0 40 40"><path d="M12.1,13.8v19.1H5.7V13.8C5.7,13.8,12.1,13.8,12.1,13.8z M12.5,7.9c0,0.9-0.3,1.7-1,2.4c-0.7,0.6-1.5,0.9-2.6,0.9h0 c-1.1,0-1.9-0.3-2.5-0.9c-0.6-0.6-1-1.4-1-2.4c0-1,0.3-1.7,1-2.4S7.9,4.6,9,4.6s1.9,0.3,2.6,0.9S12.5,6.9,12.5,7.9z M35,22v11h-6.4 V22.7c0-1.4-0.3-2.4-0.8-3.2c-0.5-0.8-1.3-1.1-2.4-1.1c-0.8,0-1.5,0.2-2,0.7c-0.5,0.4-1,1-1.2,1.7c-0.1,0.4-0.2,0.9-0.2,1.6v10.7 h-6.4c0-5.1,0-9.3,0-12.5s0-5.1,0-5.7l0-0.9H22v2.8h0c0.3-0.4,0.5-0.8,0.8-1.1c0.3-0.3,0.6-0.6,1.1-1c0.5-0.4,1-0.6,1.7-0.8 c0.7-0.2,1.4-0.3,2.2-0.3c2.2,0,4,0.7,5.3,2.2C34.4,17,35,19.1,35,22L35,22z"></path></svg>
          </a>
        </div>
      </div>
      <img src={mainimage} alt="mainimage" />
    </div>
  );
}

export default Landing;
