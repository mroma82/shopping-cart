import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, combineLatest, filter, forkJoin, Observable, observable, Subject, Subscription } from 'rxjs';
import { AuthContextService } from './auth-context.service';

@Injectable({
  providedIn: 'root'
})
export class AppContextService implements OnDestroy {

  // ready
  private _readyStore$ = new BehaviorSubject<boolean>(false);
  public ready$ = this._readyStore$.asObservable();

  // subscriptions
  private subs = new Subscription();

  // new
  constructor(
    private authContext: AuthContextService
  ) {

    // ready states for all 
    var sub = combineLatest([authContext.user$])
      .pipe(filter((user) => user !== undefined))
      .subscribe(() => this._readyStore$.next(true));
    this.subs.add(sub);
  }

  // cleanup
  ngOnDestroy(): void {

    // unsubscribe
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
