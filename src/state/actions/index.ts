import { User } from "../../payload-type";
import { ActionType } from "../action-types";

interface UpdateUserAction {
  type: ActionType.UPDATE_USER;
  payload: User | null;
}

interface UpdateTokenAction {
  type: ActionType.UPDATE_TOKEN;
  payload: string;
}

export type Action = UpdateUserAction | UpdateTokenAction