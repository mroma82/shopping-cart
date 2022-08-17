import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppContextService } from '../../services/context/app-context.service';
import { AuthContextService } from '../../services/context/auth-context.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass']
})
export class ContainerComponent implements OnInit {

  // state
  ready$: Observable<boolean> = this.appContext.ready$;

  // new
  constructor(
    private authContext: AuthContextService,
    private appContext: AppContextService
  ) { }

  // init
  ngOnInit(): void {

    // init auth
    this.authContext.init();
  }

}
