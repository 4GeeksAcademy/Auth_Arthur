export const initialStore = () => {
  return {
    token: sessionStorage.getItem("token") || null,
    user: null,
    authMsg: null,
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set_auth":
      if (action.payload.token) {
        sessionStorage.setItem("token", action.payload.token);
      }
      return {
        ...store,
        token: action.payload.token,
        user: action.payload.user,
        authMsg: null,
      };

    case "logout":
      sessionStorage.removeItem("token");
      return {
        ...store,
        token: null,
        user: null,
        authMsg: null,
      };

    case "set_user":
      return {
        ...store,
        user: action.payload,
      };
    default:
      throw Error("Unknown action.");
  }
}
