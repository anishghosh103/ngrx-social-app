import * as Auth from './auth.actions';
import { UserModel } from 'src/app/models/user.model';

export interface State {
  loggedIn: boolean;
  loading: boolean;
  userData: UserModel;
}

export const initialState: State = {
  loading: false,
  loggedIn: false,
  userData: null
};

export function AuthReducer(state = initialState, action: Auth.ActionsUnion) {
  const { type } = action;
  switch (type) {
    case Auth.ActionTypes.INIT:
      return {
        ...state,
        loading: true
      };

    case Auth.ActionTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        userData: action['payload']
      }

    case Auth.ActionTypes.FAILED:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        userData: null
      }

    case Auth.ActionTypes.LOGOUT:
      return initialState;

    default:
      return state;
  }
}