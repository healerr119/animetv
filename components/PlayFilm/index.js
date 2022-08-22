import React, { useEffect, useRef } from 'react'
import videojs from "video.js";
import "video.js/dist/video-js.css";
import ContentPost from '../ContenPost';

export default function PlayFilm() {
    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
            videojs(videoRef.current, {
            sources: [
                {
                src: "https://kd.hd-bophim.com/20220822/20512_003db5e0/index.m3u8",
                type: "application/x-mpegURL"
                }
            ]
            });
        }
    });
  return (
    <div className="app main">
         <div className="container post-play">
            <div className='title'>
                <h2> DIỆP VẤN 4: HỒI CUỐI </h2>
            </div>
            <div className='video-player'>
                <video controls ref={videoRef} className="video-js" />
            </div>
            <ContentPost />
         </div>
    </div>
  )
}
