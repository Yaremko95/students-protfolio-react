import React from "react";
import { createUseStyles } from "react-jss";
import Slide from "./Slide";
import { connect } from "react-redux";
function Carousel(props) {
  const [index, setIndex] = React.useState(0);
  const [goToSlide, setGoToSlide] = React.useState(null);
  const [prevPropsGoToSlide, setPrevPropsGoToSlide] = React.useState(0);
  const [newSlide, setNewSlide] = React.useState(false);

  const useStyles = createUseStyles({
    wrapper: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      width: "100%",
      height: "100%",
    },
  });
  const classes = useStyles();
  React.useEffect(() => {
    const i = props.data.findIndex(
      (item) => item._id === parseInt(props.selected)
    );
    setIndex(i);
    console.log(i, "////////////////");
  });
  const mod = (a, b) => {
    // console.log("mod", ((a % b) + b) % b);
    return ((a % b) + b) % b;
  };
  const modBySlidesLength = (index) => {
    return mod(index, props.data.length);
  };

  const moveSlide = (direction, id) => {
    setIndex(modBySlidesLength(index + direction));
    props.setSelected(id);
    console.log(index);
  };
  const clampOffsetRadius = (offsetRadius) => {
    const { data } = props;
    const upperBound = Math.floor((data.length - 1) / 2);

    if (offsetRadius < 0) {
      return 0;
    }
    if (offsetRadius > upperBound) {
      return upperBound;
    }

    return offsetRadius;
  };

  const getPresentableSlides = () => {
    const { data, selected } = props;
    console.log("presentableSlides", props);
    let { offsetRadius } = props;
    offsetRadius = clampOffsetRadius(offsetRadius);
    console.log("offsetRadius", offsetRadius);
    const presentableSlides = new Array();

    for (let i = -offsetRadius; i < 1 + offsetRadius; i++) {
      presentableSlides.push(data[modBySlidesLength(index + i)]);
    }

    return presentableSlides;
  };
  const { animationConfig, offsetRadius } = props;
  return (
    <div className={classes.wrapper}>
      {getPresentableSlides().map((slide, presentableIndex) => (
        <Slide
          key={slide._id}
          data={slide}
          moveSlide={moveSlide}
          offsetRadius={clampOffsetRadius(offsetRadius)}
          index={presentableIndex}
          animationConfig={animationConfig}
        />
      ))}
    </div>
  );
}

Carousel.defaultProps = {
  offsetRadius: 2,
  animationConfig: { tension: 120, friction: 14 },
};

export default connect((state) => ({ ...state }))(Carousel);
