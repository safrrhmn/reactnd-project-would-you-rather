import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import PollResult from "./PollResult";
import { connect } from "react-redux";
import { submitPoll } from "../thunk";

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
const Poll = ({ user, question, submitPoll }) => {
  const [value, setValue] = React.useState(question.optionOne.text);
  const [ind, setInd] = React.useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const classes = useStyles();
  const poll = (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {user} asks:
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value={question.optionOne.text}
              control={<Radio />}
              label={question.optionOne.text}
            />
            <FormControlLabel
              value={question.optionTwo.text}
              control={<Radio />}
              label={question.optionTwo.text}
            />
          </RadioGroup>
        </FormControl>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              submitPoll(
                question,
                value === question.optionOne.text ? "optionOne" : "optionTwo"
              );
              setInd(true);
            }}
          >
            Submit
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
  return ind ? <PollResult user={user} question={question} /> : poll;
};

const mapDispatchToProps = (dispatch) => ({
  submitPoll: (qsn, vote) => dispatch(submitPoll(qsn, vote)),
});
export default connect(null, mapDispatchToProps)(Poll);
