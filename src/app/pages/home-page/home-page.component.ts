import { Component, OnInit } from '@angular/core';
import { HomePageContextService } from '../../services/context/home-page-context.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
  providers: [
    HomePageContextService
  ]
})
export class HomePageComponent implements OnInit {

  // state
  products$ = this.context.products$;

  // new
  constructor(
    private context: HomePageContextService
  ) { }

  // init
  ngOnInit(): void {

    // init context
    this.context.init();
  }
}
