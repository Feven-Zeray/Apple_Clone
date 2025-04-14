import React, { useState, useEffect } from "react";
import items from "./data";

function YoutubeVideos() {
  const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&order=date&key=AIzaSyD3Xezv60I4nK5b0iOjiBt4xHeex8DcsPo"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setVideos(data.items);
  //     });
  // }, []);

  return (
    <div>
      <div className="container text-center">
        <div className="col-12">
          {" "}
          {/* 12 grid yza center lay thonalech */}
          <h1>latest videos</h1>
        </div>
        <div className="row h-100 align-items-center justify-content-center">
          {items?.map((singlevideo, i) => {
            let vidId = singlevideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            return (
              <div key={i} className=" col-sm-12 col-md-6 col-lg-4 ">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank" rel="noreferrer">
                      <img
                        src={singlevideo.snippet.thumbnails.high.url}
                        alt="thumbnails"
                      />
                    </a>
                  </div>

                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank" rel="noreferrer">
                        {singlevideo.snippet.title}
                      </a>
                    </div>

                    <div className="videoDesc">
                      {singlevideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideos;

// VITE_API_KEY = 123456789;
// const apiKey = process.env.VITE_API_KEY;
