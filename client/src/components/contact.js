import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import { CardActionArea } from "@material-ui/core/";
import { CardActions } from "@material-ui/core";
import { CardContent } from "@material-ui/core/";
import { CardMedia } from "@material-ui/core/";
import { Button } from "@material-ui/core/";
import { Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "animate.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <h1
        style={{ fontFamily: "Alata", paddingTop: "1rem" }}
        className="animate__animated animate__fadeIn"
      >
        Made with <FavoriteIcon style={{ color: "red" }} /> and <img src='https://res.cloudinary.com/ggsipu/image/upload/v1662802475/1183621_jzwrph.png' style={{height:'2rem'}} />{" "}By Gaurav Verma
      </h1>

      <div className="contact_container">
      
        <div className="contact_item animate__animated animate__fadeInLeft">
          <Card className={classes.root} variant="outlined">
            <CardActionArea>
              <CardMedia
                component="img"
                alt=" Gaurav Verma"
                height="300"
                image={require("../images/profile.png")}
                title="Gaurav Verma"
              />
              <CardContent className="contact_card">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  style={{ fontFamily: "Mulish" }}
                >
                  Gaurav Verma
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ fontFamily: "Poppins" }}
                >
                  Self taught MERN Stack Developer and Comptetive Programmer
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              style={{
                textAlign: "right",
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: "10vh",
                paddingRight: "10vh"
              }}
            >
              <div>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/gaurav-verma-88056a224/"
                >
                  <img
                    src="https://res.cloudinary.com/ggsipu/image/upload/v1662801645/1377213_oql0kd.png"
                    alt="linkedin"
                    style={{ height: "5vh", width: "5vh" }}
                  />
                </a>
              </div>
              <div>
                <a target="_blank" href="https://github.com/abcdeCoder">
                  <img
                    src="https://res.cloudinary.com/ggsipu/image/upload/v1662801938/536452_mphb8w.png"
                    alt="linkedin"
                    style={{ height: "5vh", width: "5vh" }}
                  />
                </a>
              </div>
              <div>
                <a target="_blank" href="https://abcdecoder.github.io/portfolio.github.io/">
                  <img
                    src="https://res.cloudinary.com/ggsipu/image/upload/v1662802087/3281307_stx2jq.png"
                    alt="linkedin"
                    style={{ height: "5vh", width: "5vh" }}
                  />
                </a>
              </div>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Contact;
