const initLoginState = {
  isRegister: "Rifkidsfcdscs",
};

const RegisterReducer = (state = initLoginState, action) => {
  switch (action.type) {
    case "tes2":
      return {
        isRegister: "tes2",
      };
    case "tes3":
      return {
        isRegister: "tes3",
      };
    case "tes1":
      return initLoginState;
    default:
      return state;
  }
};

export default RegisterReducer;
