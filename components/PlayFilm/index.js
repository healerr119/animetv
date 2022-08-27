import React, { useEffect, useRef } from 'react'
import videojs from "video.js";
import "video.js/dist/video-js.css";
import ContentPost from '../ContenPost';

export default function PlayFilm(video) {
    const link = video.video ? video.video[0].server_data[0].link_m3u8 : '';
    console.log(link);
    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
            videojs(videoRef.current, {
            sources: [
                {
                    src: `${link}`,
                    type: "application/x-mpegURL"
                }
            ]
            });
        }
    });
  return (
         <div className="container post-play">
            <div className='video-player'>
                <video controls ref={videoRef} className="video-js" />
            </div>
         </div>
  )
}
