import React from "react";
import RockAlbum from "./RockAlbum";
export default function Home() {
  return (
    <div className="mainPage mt-3">
      <div className="row justify-content-center">
        <div className="col-10 mainLinks d-flex justify-content-between">
          <a href="#a" style={{ textDecoration: "none" }}>
            TRENDING
          </a>
          <a href="#b" style={{ textDecoration: "none" }}>
            PODCAST
          </a>
          <a href="#c" style={{ textDecoration: "none" }}>
            MOODS AND GENRES
          </a>
          <a href="#d" style={{ textDecoration: "none" }}>
            NEW RELEASES
          </a>
          <a href="#e" style={{ textDecoration: "none" }}>
            DISCOVER
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <RockAlbum />
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            ></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            ></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
