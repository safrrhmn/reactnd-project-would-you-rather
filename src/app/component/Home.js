import React, { useState } from "react";
import { createPoll } from "../../app/actions";
import { connect } from "react-redux";
import Poll from "./Poll";
import { submitPoll } from "../thunk";
import { Card, Grid, IconButton, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
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
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const Home = ({ users, authedUser, questions, createPoll, submitPoll }) => {
  const classes = useStyles();

  const [pollQsnId, setPollQsnId] = useState("");
  const handleViewPoll = (q) => {
    console.log(questions.filter((qs) => qs.id === q)[0]);
    setPollQsnId(questions.filter((qs) => qs.id === q)[0]);
    createPoll(questions.filter((qs) => qs.id === q)[0]);
  };
  const ans = (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={6}>
        <div>
          {questions.map((q) => (
            <Card className={classes.root} variant="outlined">
              <Typography variant="h5" component="h2">
                {users.find((u) => u.id === q.author).name} asks:
              </Typography>
              <CardContent>
                <Typography className={classes.pos} color="textPrimary">
                  Would you rather?
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {q.optionOne.text}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {q.optionTwo.text}
                </Typography>
                <Paper
                  className={classes.paper}
                  variant="outlined"
                  value={q.id}
                  onClick={(e) =>
                    handleViewPoll(e.target.getAttribute("value"))
                  }
                >
                  View Poll
                </Paper>
              </CardContent>
            </Card>
          ))}
        </div>
      </Grid>
    </Grid>
  );

  const poll = <Poll user={authedUser} question={pollQsnId} />;
  return pollQsnId !== "" ? poll : ans;
};
const mapStateToProp = (state) => ({
  authedUser: state.authedUser.authedUser.name,
});
const mapDispatchToProp = (dispatch) => ({
  createPoll: (qsn) => dispatch(createPoll(qsn)),
});

export default connect(mapStateToProp, mapDispatchToProp)(Home);
