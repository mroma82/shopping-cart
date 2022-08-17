import { Component, OnInit } from '@angular/core';
import { AuthContextService } from '../../services/context/auth-context.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass']
})
export class ContainerComponent implements OnInit {

  // new
  constructor(
    private authContext: AuthContextService
  ) { }

  // init
  ngOnInit(): void {

    // init auth
    this.authContext.init();
  }

}
