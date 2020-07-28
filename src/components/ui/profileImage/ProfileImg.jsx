import React from "react";
import Image from "react-bootstrap/Image";
import { createUseStyles } from "react-jss";
import ImgTitle from "./ImgTitle";
function ProfileImg({ data }) {
  const useStyle = createUseStyles({
    imageContainer: {
      position: "relative",
      marginTop: "2rem",
    },
    profileImage: {
      maxWidth: "25rem",
      height: "45rem",
      objectFit: "cover",
      boxShadow: "rgba(194, 175, 169, 0.55) 19px 30px 45px 5px",
      zIndex: "1000",
      position: "relative",
    },
    wrapper: {
      position: "relative",
    },
    img: {
      position: "absolute",
      bottom: "0",
      left: "-60%",
      height: "300px",
    },
  });
  const classes = useStyle();

  return (
    <div className={classes.imageContainer}>
      <ImgTitle data={data} />
      <div className={classes.wrapper}>
        <Image className={classes.profileImage} src={data.image} />
        <Image
          className={classes.img}
          src={
            "https://mycareer.qodeinteractive.com/sarah/wp-content/uploads/2019/12/h1-img-2.png"
          }
        />
      </div>
    </div>
  );
}

export default ProfileImg;
