const initialState = {
  HP: 8
};

const reducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "LOOSE_HP":
      newState.HP -= 1;
      break;
  }
  return newState;
};

export default reducer;
