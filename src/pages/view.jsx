import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ReactHlsPlayer from 'react-hls-player'
import {ReactFlvPlayer} from 'react-flv-player'
import ReactPlayer from 'react-player'

const Dust2 = styled.a`
  display: flex;
  background-color: fff;
  height: 94vh;
`;

export default React.memo(() => {

    


  return (
    <Dust2>
      <div style={{display:'flex', margin:'0 auto'}}>

      {/* <ReactHlsPlayer url='http://localhost:8000/live/test_stream/index.m3u8' /> */}
      {/* <ReactHlsPlayer
    url='http://localhost:8000/live/test_stream/index.m3u8'
    autoplay={false}
    controls={true}
    width="100%"
    height="auto"
/> */}
<div style={{height:'800px', marginTop:'100px'}}>
    <ReactFlvPlayer
          url = "http://localhost:8000/live/test_stream.flv"
          heigh = "800px"
          width = "800px"
          isMuted={false}
        /></div>




        {/* <video
          id="my-player"
          class="video-js"
          controls
          preload="auto"
          poster="//vjs.zencdn.net/v/oceans.png"
          data-setup="{}"
        >
          <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
          <source
            src="//vjs.zencdn.net/v/oceans.webm"
            type="video/webm"
          ></source>
          <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
          <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading
            to a web browser that
            <a href="https://videojs.com/html5-video-support/" target="_blank">
              supports HTML5 video
            </a>
          </p>
        </video> */}


        {/* <div className="Pudj">
          <Link to="/regf">Зарегестрироваться</Link>
        </div>
        <div className="Morph">asdasd</div> */}
      </div>
    </Dust2>
  );
});
