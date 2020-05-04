import React from "react";
import {
  Card,
  Typography,
  CardContent,
  Button,
  makeStyles,
  Grid,
} from "@material-ui/core";

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

const LeaderBoard = ({ users, questions }) => {
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
          {users.map((user) => (
            <Card className={classes.root} variant="outlined">
              <Typography variant="h5" component="h2">
                {user.name}:
              </Typography>
              <CardContent>
                <Typography className={classes.pos} color="textSecondary">
                  Answered Questions:{" "}
                  {
                    questions.filter(
                      (q) =>
                        q.optionOne.votes.includes(user.id) ||
                        q.optionTwo.votes.includes(user.id)
                    ).length
                  }
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Created Questions:{" "}
                  {questions.filter((q) => q.author === user.id).length}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Score:{" "}
                  {questions.filter(
                    (q) =>
                      q.optionOne.votes.includes(user.id) ||
                      q.optionTwo.votes.includes(user.id)
                  ).length +
                    questions.filter((q) => q.author === user.id).length}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};
export default LeaderBoard;
