import React, { useState } from "react";

import { Box, Slider, Fab } from "@mui/material";
import ReactPlayer from "react-player";
import Image from "mui-image";
import { useRef } from "react";

import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

function MediaCarrousel(props) {
  const videoplayer = useRef(null);
  const [videomuted, setVideomuted] = useState(false);

  const maxItems = props.media.length;
  //let timer = null;
  const nextItem = () => {
    if (!(maxItems > 1)) return;

    let next = props.itemIndex + 1;
    if (next === maxItems) next = 0;

    //if(props.media[next].type === "image")
    //{
    //    if(timer !== null){
    //        clearTimeout(timer);
    //        timer = null;
    //    }
    //
    //    timer = setTimeout(() => {
    //        nextItem();
    //
    //        clearTimeout(timer);
    //        timer = null;
    //      }, 100);
    //}
    props.changeitemIndex(next);
  };
  switch (props.media[props.itemIndex].type) {
    case "video":
      const volIcon = videomuted ?  <VolumeOffIcon /> : <VolumeUpIcon />;
      //<Slider
      //aria-label="timeline"
      //size="small"
      //color="secondary"
      //sx={{ width: "40%", position: "absolute", bottom: "1%" }}
      ///>

      return (
        <Box
          sx={{
            width: props.width,
            height: props.height,
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <ReactPlayer
            url={props.media[props.itemIndex].content}
            width={props.width}
            height={props.height}
            onEnded={nextItem}
            playing={true}
            volume={0.2}
            muted={videomuted}
            ref={videoplayer}
          />

          <Fab
            size="small"
            color="secondary"
            aria-label="Launch"
            sx={{ m: 0.2, position: "absolute", bottom: "1%", right: "1%" }}
            onClick={() => {
              setVideomuted(!videomuted);
            }}
          >
            {volIcon}
          </Fab>
        </Box>
      );
    case "image":
      return (
        <Box
          sx={{
            width: props.width,
            height: props.height,
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            alt="image"
            src={process.env.PUBLIC_URL + props.media[props.itemIndex].content}
            fit="contain"
            duration={0}
          />
        </Box>
      );
    default:
      return <div>Not suposed to be here</div>;
  }
}

export default MediaCarrousel;
