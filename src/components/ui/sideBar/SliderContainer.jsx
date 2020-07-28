import React from "react";
import { createUseStyles } from "react-jss";
import { config } from "react-spring";
import Carousel from "./Carousel";
function SliderContainer({ data, setSelected, selected }) {
  const useStyle = createUseStyles({
    container: {
      position: "fixed",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "20%",
      top: "0",
      left: "0",
      boxShadow: "rgba(194, 175, 169, 0.55) 19px 30px 45px 5px",
      height: "100vh",

      background: "#ee7968",
    },
  });
  const classes = useStyle();
  const [goToSlide, setGoToSlide] = React.useState(0);
  const [offsetRadius, setOffsetRadius] = React.useState(2);
  const [conf, setConfig] = React.useState(config.gentle);

  return (
    <div className={classes.container}>
      <Carousel
        setSelected={(id) => setSelected(id)}
        selected={selected}
        data={data}
        offsetRadius={offsetRadius}
        animationConfig={config}
      />
    </div>
  );
}

export default SliderContainer;
