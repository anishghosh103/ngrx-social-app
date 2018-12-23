import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginInitiate, Logout } from 'src/app/store/auth/auth.actions';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = '';

  public loading$: Observable<boolean>;
  public loggedIn$: Observable<boolean>;
  public userData$: Observable<UserModel>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.loading$ = this.store.select('auth', 'loading');
    this.loggedIn$ = this.store.select('auth', 'loggedIn');
    this.userData$ = this.store.select('auth', 'userData');
  }

  login() {
    if (this.username) {
      this.store.dispatch(new LoginInitiate({ username: this.username }));
    }
  }

  logout() {
    this.store.dispatch(new Logout())
  }

}
