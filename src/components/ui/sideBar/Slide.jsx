import React from "react";
import { Spring, animated } from "react-spring/renderprops";
import { createUseStyles } from "react-jss";
import Image from "react-bootstrap/Image";
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
      height: "30%",
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
      background: "#f5ebe7",
      // fontSize: "35px",
      display: "flex",
      // alignItems: "center",
      paddingTop: "4rem",
      justifyContent: "center",
      transformOrigin: "50% 50%",
      boxShadow: "  rgba(194, 175, 169, 0.3) 5px 10px 15px 2px",
      borderRadius: "10px",
    },
    title: {
      position: "absolute",
      top: "0%",
      left: "25%",
      color: "rgb(107, 103, 104)",
      fontSize: "35px",
      fontWeight: "600",
      opacity: "0.9",

      // textShadow: "1px 0px 4px rgba(150, 150, 150, 0.79)",
    },
    imgContainer: {
      position: "absolute",
      left: "-15px",
      top: "-10px",
      opacity: "0.8",
      boxShadow: "  rgba(194, 175, 169, 0.6) 5px 10px 20px 5px",
      borderRadius: "10px",
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
            <div className={classes.title}>
              <span>
                <i>
                  {data.name} {data.surname}
                </i>
              </span>
            </div>
            <div className={classes.imgContainer}>
              <Image
                src={data.image}
                style={{ width: "5rem", height: "10rem", objectFit: "cover" }}
              />
            </div>
            <div>
              <span>I'm available at:</span>
              <br />
              <span>{data.email}</span>
            </div>
          </div>
        </div>
      )}
    </Spring>
  );
}

export default Slide;
