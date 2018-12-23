import { Action } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';

export enum ActionTypes {
  LOGIN_INIT = '[Login Page] login',
  LOGIN_SUCCESS = '[Login Page] logged in successfully',
  LOGIN_FAILED = '[Login Page] error logging in',
  LOGOUT = '[Login Page] logout',

  SIGNUP_INIT = '[Signup Page] sign up initiate',
  SIGNUP_SUCCESS = '[Signup Page] signed up successfully',
  SIGNUP_FAILED = '[Signup Page] error signing up',
}

export class LoginInitiate implements Action {
  public readonly type = ActionTypes.LOGIN_INIT;
  constructor(public payload: { username: string }) { }
}

export class LoginSuccess implements Action {
  public readonly type = ActionTypes.LOGIN_SUCCESS;
  constructor(public payload: UserModel) { }
}

export class LoginFailed implements Action {
  public readonly type = ActionTypes.LOGIN_FAILED;
  constructor(public payload: { error: string }) { }
}

export class SignupInitiate implements Action {
  public readonly type = ActionTypes.SIGNUP_INIT;
  constructor(public payload: UserModel) { }
}

export class SignupSuccess implements Action {
  public readonly type = ActionTypes.SIGNUP_SUCCESS;
  constructor(public payload: UserModel) { }
}

export class SignupFailed implements Action {
  public readonly type = ActionTypes.SIGNUP_FAILED;
  constructor(public payload: { error: string }) { }
}

export class Logout implements Action {
  public readonly type = ActionTypes.LOGOUT;
  constructor() { }
}

export type ActionsUnion = LoginInitiate | LoginFailed | LoginSuccess | SignupInitiate | SignupSuccess | SignupFailed | Logout;