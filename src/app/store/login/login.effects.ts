import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { mergeMap, map, catchError } from "rxjs/operators";
import { Action } from "@ngrx/store";
import * as Login from "./login.actions";
import { UserModel } from "src/app/models/user.model";

@Injectable()
export class LoginEffects {

  constructor(
    private http: HttpClient,
    private actions$: Actions
  ) { }

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(Login.ActionTypes.INIT),
    mergeMap((action: any) => {
      return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
        map((data: any) => {
          const user = data.find((user: UserModel) => user.username === action.payload.username);
          return user ? new Login.LoginSuccess(user) : new Login.LoginFailed({ error: 'User not found' });
        }),
        catchError(() => of(new Login.LoginFailed({ error: 'Something went wrong' })))
      )
    })
  )

}