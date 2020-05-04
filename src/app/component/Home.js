import React from "react";
import { createPoll } from "../../app/actions";
import { connect } from "react-redux";
import Poll from "./Poll";
import { submitPoll } from "../thunk";
import { Card, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
const Home = ({ users, questions, createPollQsn, createPoll }) => {
  const classes = useStyles();
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
                <Button
                  onClick={(e) => createPoll(q)}
                  size="small"
                  variant="outlined"
                >
                  View Poll
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Grid>
    </Grid>
  );

  const poll =
    createPollQsn === undefined ? null : (
      <Poll
        user={users.find((u) => u.id === createPollQsn.author).name}
        question={createPollQsn}
        submitPoll={submitPoll}
      />
    );
  return createPollQsn ? poll : ans;
};

const mapStateToProp = (state) => ({
  createPollQsn: state.createPollSuccess.question,
});
const mapDispatchToProp = (dispatch) => ({
  createPoll: (qsn) => dispatch(createPoll(qsn)),
  submitPoll: (qsn, vote) => dispatch(submitPoll(qsn, vote)),
});

export default connect(mapStateToProp, mapDispatchToProp)(Home);
