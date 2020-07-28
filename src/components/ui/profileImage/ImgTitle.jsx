import React from "react";
import { createUseStyles } from "react-jss";
function ImgTitle({ data }) {
  const useStyle = createUseStyles({
    imageTitle: {
      position: "absolute",
      height: "180px",
      width: "180px",
      fontSize: "16px",
    },
    char: {
      position: "absolute",
      top: "-40%",
      left: "0",
      height: "100%",
      transformOrigin: "bottom-center",
      width: "30px",
      fontWeight: "600",
      fontSize: "20px",
      color: "#ee7968",
    },
  });
  const classes = useStyle();
  let i = 200;
  const titleArr = Array.from(data.name + " " + data.surname);
  return (
    <div className={classes.imageTitle}>
      {titleArr.map((char, index) => {
        i = 230 / titleArr.length + i;

        return (
          <span
            className={classes.char}
            key={index}
            style={{ transform: `rotate(${i}deg)` }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}

export default ImgTitle;
