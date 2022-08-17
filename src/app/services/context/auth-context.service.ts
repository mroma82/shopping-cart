import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../../models/user-model';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthContextService {

  // state
  private _userStore$ = new BehaviorSubject<UserModel | undefined>(undefined);
  user$ = this._userStore$.asObservable();

  // new
  constructor(
    private api: ApiService
  ) { }

  // init
  init() {

    // load user info
    this.api.getCurrentUser().subscribe(x => this._userStore$.next(x));
  }
}
