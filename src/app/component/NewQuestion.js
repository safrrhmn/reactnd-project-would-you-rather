import React, { useState } from "react";
import { connect } from "react-redux";
import { Card, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { addNewQuestion } from "../thunk";

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
const NewQuestion = ({ saveQsn }) => {
  const classes = useStyles();
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const addNewQuestion = (e, optionOne, optionTwo) => {
    e.preventDefault();
    saveQsn(optionOne, optionTwo);
  };
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={6}>
        <Card className={classes.root} variant="outlined">
          <Typography variant="h5" component="h2">
            Complete the question
          </Typography>
          <CardContent>
            <Typography className={classes.pos} color="textPrimary">
              Would you rather?
            </Typography>
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  onChange={(e) => {
                    setOptionOne(e.target.value);
                  }}
                />
                <Typography>Or</Typography>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  onChange={(e) => {
                    setOptionTwo(e.target.value);
                  }}
                />
              </div>
              <Button
                size="small"
                variant="outlined"
                onClick={(e) => addNewQuestion(e, optionOne, optionTwo)}
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
const mapDispatchToProps = (dispatch) => ({
  saveQsn: (optionOne, optionTwo) =>
    dispatch(addNewQuestion(optionOne, optionTwo)),
});
export default connect(null, mapDispatchToProps)(NewQuestion);
