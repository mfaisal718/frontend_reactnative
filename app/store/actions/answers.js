export const DELETE_ANSWER = "DELETE_ANSWER";
export const CREATE_ANSWER = "CREATE_ANSWER";
export const UPDATE_ANSWER = "UPDATE_ANSWER";
export const SET_ANSWER = "SET_ANSWER";

export const fetchProducts = () => {
  return async (dispatch) => {
    // any async code you want!
    try {
      const response = await fetch(
        "https://aqueous-inlet-20032.herokuapp.com/"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await response.json();
      const loadedAnswers = [];

      dispatch({ type: SET_ANSWERS, answers: loadedAnswers });
    } catch (err) {
      throw err;
    }
  };
};

export const deleteAnswer = (answerId) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://aqueous-inlet-20032.herokuapp.com/questions",
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    dispatch({ type: DELETE_ANSWER, pid: answerId });
  };
};

export const createAnswer = () => {
  return async (dispatch) => {
    // any async code you want!
    const response = await fetch("https://aqueous-inlet-20032.herokuapp.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    const resData = await response.json();

    dispatch({
      type: CREATE_ANSWER,
      answerData: {
        id: resData,
      },
    });
  };
};

export const updateAnswer = () => {
  return async (dispatch) => {
    const response = await fetch("https://aqueous-inlet-20032.herokuapp.com/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    dispatch({
      type: UPDATE_ANSWER,
      pid: id,
      answerData: {},
    });
  };
};
