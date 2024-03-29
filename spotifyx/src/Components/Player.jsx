
import React from 'react';
import Next from '../spotify-start/playerbuttons/Next.png';
import Shuffle from '../spotify-start/playerbuttons/Shuffle.png';
import Play from '../spotify-start/playerbuttons/Play.png';
import Previous from '../spotify-start/playerbuttons/Previous.png';
import Repeat from '../spotify-start/playerbuttons/Repeat.png';

export default function Player() {
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row">
        <div className="col-lg-10 offset-lg-2">
          <div className="row">
            <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
              <div className="d-flex align-items-center justify-content-between">
                <a href="#">
                  <img src={Shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={Previous} alt="previous" />
                </a>
                <a href="#">
                  <img src={Play} alt="play" />
                </a>
                <a href="#">
                  <img src={Next} alt="next" />
                </a>
                <a href="#">
                  <img src={Repeat} alt="repeat" />
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center playBar py-3">
            <div className="col-8 col-md-6">
            <div className="progress" style={{color: 'white', backgroundColor: '#414141', height: '3px'}}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
