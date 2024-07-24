import { ActionType } from "../action-types";
import { Action } from "../actions/index";
import { AuthState } from "../../my-type";

const authReducer = (state: AuthState | null = null, action: Action) => {
  switch (action.type) {
    case ActionType.UPDATE_USER:
      if (action.payload == null) {
        return null;
      } else {
        return { user: action.payload, jwtToken: state?.jwtToken };
      }
    case ActionType.UPDATE_TOKEN:
      return { user: null, jwtToken: action.payload };
    default:
      return state;
  }
}

export default authReducer;