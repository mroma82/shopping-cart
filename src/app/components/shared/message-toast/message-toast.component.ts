import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageModel } from '../../../models/message-model';
import { MessageContextService } from '../../../services/context/message-context.service';

@Component({
  selector: 'app-message-toast',
  templateUrl: './message-toast.component.html',
  styleUrls: ['./message-toast.component.sass']
})
export class MessageToastComponent implements OnInit {

  // state
  messages$: Observable<MessageModel[]> = this.context.messages$;

  // new
  constructor(
    private context: MessageContextService
  ) { }

  ngOnInit(): void {
  }

  // expire item
  expire(item: MessageModel) {
    item.expired = true;
  }
}
