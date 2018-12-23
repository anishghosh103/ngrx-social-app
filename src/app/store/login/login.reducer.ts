import * as Login from './login.actions';
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

export function LoginReducer(state = initialState, action: Login.ActionsUnion) {
  const { type } = action;
  switch (type) {
    case Login.ActionTypes.INIT:
      return {
        ...state,
        loading: true
      };

    case Login.ActionTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        userData: action['payload']
      }

    case Login.ActionTypes.FAILED:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        userData: null
      }

    case Login.ActionTypes.LOGOUT:
      return initialState;

    default:
      return state;
  }
}