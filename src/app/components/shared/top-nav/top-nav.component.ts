import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserModel } from '../../../models/user-model';
import { AuthContextService } from '../../../services/context/auth-context.service';
import { CartContextService } from '../../../services/context/cart-context.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.sass']
})
export class TopNavComponent implements OnInit {

  // state
  user$: Observable<UserModel | undefined> = this.authContext.user$
  cartSize$ = this.cartContext.cart$.pipe(map(x => x.length));

  // new
  constructor(
    private authContext: AuthContextService,
    private cartContext: CartContextService
  ) { }

  ngOnInit(): void {
  }

}
