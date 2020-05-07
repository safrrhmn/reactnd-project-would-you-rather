import { loadUserSuccess, loadQsnSuccess } from "./actions";
import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../_DATA";

export const loadUserDataFromFile = () => async (dispatch, getState) => {
  try {
    const result = await _getUsers();
    dispatch(
      loadUserSuccess(Object.getOwnPropertyNames(result).map((e) => result[e]))
    );
  } catch (error) {
    console.log(error);
  }
};

export const loadQsnAnswers = () => async (dispatch, getState) => {
  try {
    const result = await _getQuestions();
    dispatch(
      loadQsnSuccess(Object.getOwnPropertyNames(result).map((e) => result[e]))
    );
  } catch (error) {
    console.log(error);
  }
};

export const submitPoll = (qsn, vote) => async (dispatch, getState) => {
  try {
    const { authedUser } = getState();
    console.log(vote);
    const result = await _saveQuestionAnswer({
      authedUser: authedUser.authedUser.id,
      qid: qsn.id,
      answer: vote,
    });
    console.log(result);
    loadQsnAnswers();
  } catch (error) {
    console.log(error);
  }
};

export const addNewQuestion = (optionOne, optionTwo) => async (
  dispatch,
  getState
) => {
  try {
    const { authedUser } = getState();
    console.log(optionOne);
    console.log(optionTwo);
    await _saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser.authedUser.id,
    });
  } catch (error) {
    console.log(error);
  }
};
