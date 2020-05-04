import React from "react";
import { Card } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";

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
  margin: {
    margin: theme.spacing(1),
  },
}));
const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const Login = ({ users, handleChange }) => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={6}>
          <Card className={classes.root} variant="elevation">
            <CardContent>
              <Typography variant="h5" component="h2">
                Welcome to Would You Rather
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Please login to continue
              </Typography>
              <FormControl className={classes.margin}>
                <InputLabel htmlFor="demo-customized-select-native">
                  Login As:
                </InputLabel>
                <NativeSelect
                  id="demo-customized-select-native"
                  value="Test"
                  onChange={(e) =>
                    handleChange(
                      users.filter((u) => u.name === e.target.value)[0]
                    )
                  }
                  input={<BootstrapInput />}
                >
                  <option aria-label="None" value="" />
                  {users.map((key) => (
                    <option key={key.id}>{key.name}</option>
                  ))}
                </NativeSelect>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default Login;
