let initialState = {
  login: {},
};

const reducers = (state = initialState, action) => {
  switch (action.payload) {
    case "LOGIN":
      state.login = action.payload;
      return state;

    default:
      return state;
  }
};
export default reducers;
