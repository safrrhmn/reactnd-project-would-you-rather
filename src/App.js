import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadUserDataFromFile, loadQsnAnswers } from "./app/thunk";
import Login from "./app/component/Login";
import { loadAuthedUser, logOutUser } from "./app/actions";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Box, Typography, AppBar } from "@material-ui/core";
import PropTypes from "prop-types";
import Home from "./app/component/Home";
import LeaderBoard from "./app/component/LeaderBoard";
import NewQuestion from "./app/component/NewQuestion";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function App({
  users,
  authedUser,
  startLoadingUser,
  startLoadingQuestions,
  handleChange,
  logOut,
  questions,
}) {
  useEffect(() => {
    startLoadingUser();
    startLoadingQuestions();
  }, []);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      {authedUser ? (
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleTabChange}
              aria-label="simple tabs example"
            >
              <Tab label="Home" {...a11yProps(0)} />
              <Tab label="New Question" {...a11yProps(1)} />
              <Tab label="Leader Board" {...a11yProps(2)} />
              <Tab
                label={`Hi, ${authedUser.name}`}
                disabled
                {...a11yProps(3)}
              />
              <Tab label="Logout" onClick={logOut} {...a11yProps(4)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Home users={users} questions={questions} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <NewQuestion />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <LeaderBoard users={users} questions={questions} />
          </TabPanel>
          <TabPanel value={value} index={3} />
          <TabPanel value={value} index={4} />
        </div>
      ) : (
        <Login users={users} handleChange={handleChange} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  questions: state.questions,
  authedUser:
    state.authedUser === undefined ||
    state.authedUser === null ||
    state.authedUser.length === 0
      ? null
      : state.authedUser.authedUser,
});
const mapDispatchToProps = (dispatch) => ({
  startLoadingUser: () => dispatch(loadUserDataFromFile()),
  startLoadingQuestions: () => dispatch(loadQsnAnswers()),
  handleChange: (authedUser) => dispatch(loadAuthedUser(authedUser)),
  logOut: () => dispatch(logOutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
