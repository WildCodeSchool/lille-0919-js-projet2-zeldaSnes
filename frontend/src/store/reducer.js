import initialState from "./store";

const reducer = (state = initialState, action) => {
  const newState = state;
  switch (action.type) {
    case "LOOSE_HP":
      return { ...state, HP: (newState.HP -= 1) };
  }
  return newState;
};

export default reducer;
