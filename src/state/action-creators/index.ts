import { Dispatch } from "redux";
import { Action } from "../actions";
import { User } from "../../payload-type";
import { ActionType } from "../action-types";

export const updateUser = (user: User | null) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPDATE_USER,
      payload: user,
    });
  }
}