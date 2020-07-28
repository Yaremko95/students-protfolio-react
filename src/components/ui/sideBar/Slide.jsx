import React from "react";
import { Spring, animated } from "react-spring/renderprops";
import { createUseStyles } from "react-jss";
function Slide({
  data,
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
  delta,
  down,
  up,
}) {
  const useStyle = createUseStyles({
    slideContainer: {
      position: "absolute",
      height: "35%",
      top: "50%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transformOrigin: " 50% 50%",
    },
    slideCard: {
      position: "relative",
      maxWidth: "100%",
      minWidth: "90%",
      height: "100%",
      background: "white",
      fontSize: "35px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transformOrigin: "50% 50%",
    },
  });
  const classes = useStyle();
  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 1));
  console.log(".........", totalPresentables);
  const offsetCardClick = (i) => {
    console.log(i);
  };

  const translateYoffset =
    50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
  let translateY = -50;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateY = 0;
    } else if (index === totalPresentables - 1) {
      translateY = -100;
    }
  }

  if (offsetFromMiddle === 0 && down) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -40) {
      moveSlide(-1);
    }
    if (translateY < -100) {
      moveSlide(1);
    }
  }
  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }
  return (
    <Spring
      to={{
        transform: `translateX(0%) translateY(${translateY}%) scale(${distanceFactor})`,
        top: `${
          offsetRadius === 0 ? 50 : 50 + (offsetFromMiddle * 50) / offsetRadius
        }%`,
        opacity: distanceFactor * distanceFactor,
      }}
      config={animationConfig}
    >
      {(style) => (
        <div
          className={classes.slideContainer}
          style={{
            ...style,
            zIndex: Math.abs(Math.abs(offsetFromMiddle) - 2),
          }}
        >
          <div
            className={classes.slideCard}
            onClick={() => moveSlide(offsetFromMiddle, data._id)}
          >
            <span style={{ color: "rgb(10, 26, 43)" }}>{data._id}</span>
          </div>
        </div>
      )}
    </Spring>
  );
}

export default Slide;
