import React from "react";
import {
  makeStyles,
  Grid,
  Card,
  Typography,
  CardContent,
} from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const PollResult = ({ user, question }) => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={6}>
          <Card className={classes.root} variant="outlined">
            <Typography variant="h5" component="h2">
              Asked by: {user}
            </Typography>
            <CardContent>
              <Typography className={classes.pos} color="textSecondary">
                {question.optionOne.text} -{" "}
                {(question.optionOne.votes.length / 2) * 100}%
              </Typography>
              <Typography
                className={classes.pos}
                color="textSecondary"
              ></Typography>
              <Typography className={classes.pos} color="textSecondary">
                {question.optionTwo.text}-{" "}
                {(question.optionTwo.votes.length / 2) * 100}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default PollResult;
