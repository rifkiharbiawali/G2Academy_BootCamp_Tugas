const initLoginState = {
  isLogin: "Rifki",
};

const LoginReducer = (state = initLoginState, action) => {
  switch (action.type) {
    case "tes2":
      return {
        isLogin: "tes2",
      };
    case "tes3":
      return {
        isLogin: "tes3",
      };
    case "tes1":
      return initLoginState;
    default:
      return state;
  }
};

export default LoginReducer;
