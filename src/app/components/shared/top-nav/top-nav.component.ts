import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../../../models/user-model';
import { AuthContextService } from '../../../services/context/auth-context.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.sass']
})
export class TopNavComponent implements OnInit {

  // state
  user$: Observable<UserModel | undefined> = this.authContext.user$

  // new
  constructor(
    private authContext: AuthContextService
  ) { }

  ngOnInit(): void {
  }

}
