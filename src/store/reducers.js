import C from "./constants";

export default (state = {}, action) => {
  switch (action.type) {
    case "LOADING":
      console.log("triggered", !state.loading);
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};
