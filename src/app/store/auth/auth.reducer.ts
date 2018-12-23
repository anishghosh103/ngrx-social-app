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
    case Auth.ActionTypes.LOGIN_INIT:
      return {
        ...state,
        loading: true
      };

    case Auth.ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        userData: action['payload']
      }

    case Auth.ActionTypes.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        userData: null
      }

    case Auth.ActionTypes.SIGNUP_INIT:
      return {
        ...state,
        loading: true
      };

    case Auth.ActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        userData: action['payload']
      }

    case Auth.ActionTypes.SIGNUP_FAILED:
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