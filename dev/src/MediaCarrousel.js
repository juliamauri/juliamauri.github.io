import { Box } from "@mui/material";
import ReactPlayer from "react-player";
import Image from "mui-image";

function MediaCarrousel(props) {
  const maxItems = props.media.length;
  let timer = null;
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
      return (
        <ReactPlayer
          url={props.media[props.itemIndex].content}
          width={props.width}
          height={props.height}
          onEnded={nextItem}
          playing={true}
          volume={0.2}
        />
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
