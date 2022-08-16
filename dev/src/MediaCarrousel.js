import React, { useState, useEffect, useRef } from "react";

import { Box, Slider, Fab, IconButton } from "@mui/material";
import ReactPlayer from "react-player";
import Image from "mui-image";

import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

function MediaCarrousel(props) {
  const maxItems = props.media.length;

  const videoplayer = useRef(null);
  const [videomuted, setVideomuted] = useState(false);

  let timer;
  const updateTimer = function () {
    if (maxItems <= 1 || props.media[props.itemIndex].type === "video") {
      clearInterval(timer);
      props.changeSeek(0);
      return;
    }

    timer =
      !timer &&
      setInterval(() => {
        props.changeSeek(
          (prevTimervalue) => prevTimervalue + props.imageTimeStep
        );
      }, 1000);
  };

  const checkTimer = function (value, index) {
    if (
      maxItems > 1 &&
      props.media[props.itemIndex].type === "image" &&
      Number.parseInt(value) === 1
    ) {
      clearInterval(timer);
      props.changeSeek(0);
      nextItem();
    }
  };

  useEffect(() => {
    updateTimer();
    return () => {
      clearInterval(timer);
      props.changeSeek(0);
    };
  }, [props.itemIndex]);

  const nextItem = () => {
    if (maxItems <= 1) return;

    let next = props.itemIndex + 1;
    if (next === maxItems) next = 0;

    props.changeSeek(0);
    props.changeitemIndex(next);
  };

  const prevItem = () => {
    if (maxItems <= 1) return;

    let prev = props.itemIndex - 1;
    if (prev < 0) prev = maxItems - 1;

    props.changeSeek(0);
    props.changeitemIndex(prev);
  };

  const handleProgressChange = (event, value) => {
    event.preventDefault();
    switch (props.media[props.itemIndex].type) {
      case "video":
        videoplayer.current.seekTo(value);
        break;
      case "image":
        break;
      default:
        break;
    }
    props.changeSeek(value);
  };

  const handleonVideoProgress = (values) => {
    props.changeSeek(values.played);
  };

  const volIcon = videomuted ? <VolumeOffIcon /> : <VolumeUpIcon />;
  const slider_progress = (
    <Slider
      aria-label="timeline"
      size="small"
      color="secondary"
      value={props.seekProgress}
      min={0}
      max={1}
      step={0.01}
      onChange={handleProgressChange}
      getAriaValueText={checkTimer}
      sx={{
        width: "40%",
        position: "absolute",
        bottom: "1%",
        "& .MuiSlider-thumb": {
          height: "0.6vh",
          width: "0.6vh",
        },
      }}
    />
  );
  const next_item = (
    <IconButton
      aria-label="next"
      color="secondary"
      sx={{ m: 0.2, position: "absolute", bottom: "50%", right: "1%" }}
      onClick={nextItem}
    >
      <NavigateNextIcon />
    </IconButton>
  );
  const prev_item = (
    <IconButton
      aria-label="before"
      color="secondary"
      sx={{ m: 0.2, position: "absolute", bottom: "50%", left: "1%" }}
      onClick={prevItem}
    >
      <NavigateBeforeIcon />
    </IconButton>
  );

  switch (props.media[props.itemIndex].type) {
    case "video":
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
            onProgress={handleonVideoProgress}
            playing={true}
            volume={0.2}
            muted={videomuted}
            ref={videoplayer}
            loop={maxItems <= 1}
          />

          <Fab
            size="small"
            color="secondary"
            aria-label="Volume"
            sx={{ m: 0.2, position: "absolute", bottom: "1%", right: "1%" }}
            onClick={() => {
              setVideomuted(!videomuted);
            }}
          >
            {volIcon}
          </Fab>

          {maxItems > 1 && next_item}
          {maxItems > 1 && prev_item}
          {slider_progress}
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
            duration={250}
          />

          <Fab
            disabled
            size="small"
            color="secondary"
            aria-label="Volume"
            sx={{ m: 0.2, position: "absolute", bottom: "1%", right: "1%" }}
            onClick={() => {
              setVideomuted(!videomuted);
            }}
          >
            {volIcon}
          </Fab>

          {maxItems > 1 && next_item}
          {maxItems > 1 && prev_item}
          {maxItems > 1 && slider_progress}
        </Box>
      );
    default:
      return <div>Not suposed to be here</div>;
  }
}

export default MediaCarrousel;
