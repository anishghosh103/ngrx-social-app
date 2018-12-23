import { Action } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';

export enum ActionTypes {
  INIT = '[Login Page] login',
  SUCCESS = '[Login Page] logged in successfully',
  FAILED = '[Login Page] error logging in',
  LOGOUT = '[Login Page] logout'
}

export class LoginInitiate implements Action {
  public readonly type = ActionTypes.INIT;
  constructor(public payload: { username: string }) { }
}

export class LoginSuccess implements Action {
  public readonly type = ActionTypes.SUCCESS;
  constructor(public payload: UserModel) { }
}

export class LoginFailed implements Action {
  public readonly type = ActionTypes.FAILED;
  constructor(public payload: { error: string }) { }
}

export class Logout implements Action {
  public readonly type = ActionTypes.LOGOUT;
  constructor() { }
}

export type ActionsUnion = LoginInitiate | LoginFailed | LoginSuccess | Logout;