import {
  DELETE_ANSWER,
  CREATE_ANSWER,
  UPDATE_ANSWER,
  SET_ANSWER,
  ANSWERS,
} from "../actions/answers";

const initialState = {
  availableAnswers: ANSWERS,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ANSWERS:
      return {
        availableAnswers: action.answers,
        userAnswers: action.answers.filter((prod) => prod.ownerId === "u1"),
      };
    case CREATE_ANSWERS:
      const newAnswers = new Answer();
      return {
        ...state,
        availableAnswers: state.availableAnswers.concat(newAnswers),
      };
    case UPDATE_ANSWERS:
      const answerIndex = state.userAnswers.findIndex(
        (prod) => prod.id === action.pid
      );
      const updatedAnswer = new Answer(action.pid, state.userAnswers);
      const updatedUserAnswers = [...state.userAnswers];
      updatedUserAnswers[answerIndex] = updatedAnswer;
      const availableAnswerIndex = state.availableAnswers.findIndex(
        (prod) => prod.id === action.pid
      );
      const updatedAvailableAnswers = [...state.availableAnswers];
      updatedAvailableAnswers[availableAnswerIndex] = updatedAnswer;
      return {
        ...state,
        availableAnswers: updatedAvailableAnswers,
        userAnswers: updatedUserAnswers,
      };
    case DELETE_ANSWERS:
      return {
        ...state,
        userAnswers: state.userAnswers.filter(
          (answer) => answer.id !== action.pid
        ),
        availableAnswers: state.availableAnswers.filter(
          (answer) => answer.id !== action.pid
        ),
      };
  }
  return state;
};
