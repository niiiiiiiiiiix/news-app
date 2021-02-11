import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    margin: "0 auto",
    overflow: "scroll",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  rootTitleTitle: {
    fontSize: 17,
    fontWeight: 600,
    marginTop: 4,
    marginBottom: 4,
    minHeight: 44,
  },
  rootTitleSource: {
    marginTop: 0,
    marginBottom: 0,
    fontSize: "0.8rem",
    color: "grey",
    fontWeight: "bold",
  },
  rootTitleDate: {
    marginTop: 0,
    marginBottom: 0,
    fontSize: "0.8rem",
    color: "grey",
    // fontWeight: "bold",
    fontWeight: 400,
  },
  rootContent: {
    fontSize: 13,
    fontWeight: 300,
    marginBottom: 0,
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function NewsModal(props) {
  const classes = useStyles();
  const { open, setOpen, article } = props;

  console.log(article);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Card>
              <CardMedia
                component="img"
                height="auto"
                image={article?.urlToImage}
              />
              <div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <p className={classes.rootTitleTitle}>
                      {article?.title?.substring(
                        0,
                        article?.title.indexOf(" - ")
                      )}
                    </p>
                    <p className={classes.rootTitleSource}>
                      {article?.source?.name}
                    </p>
                    <p className={classes.rootTitleDate}>
                      {moment(article?.publishedAt)
                        .format("DD MMM YYYY, h:mm A")
                        .toUpperCase()}
                    </p>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <p className={classes.rootContent}>
                      {article?.content}
                      <br />
                      <br />
                      My partner asked me today if I had seen the dog bowl
                      <br />
                      .
                      <br />
                      .
                      <br />
                      .
                      <br />
                      .
                      <br />
                      .
                      <br />
                      .
                      <br />
                      .
                      <br />
                      .
                      <br />
                      .
                      <br />
                      .
                      <br />
                      .
                      <br />
                      .
                      <br />
                      .
                      <br />I said no I didn't know he could.
                    </p>
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
