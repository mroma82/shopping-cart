import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MessageModel, MessageTypes } from '../../models/message-model';

// time in ms for expiring messages
const MESSAGE_EXPIRATION_MS = 3000;

@Injectable({
  providedIn: 'root'
})
export class MessageContextService {

  // state
  private _messagesStore$ = new BehaviorSubject<MessageModel[]>([]);
  public messages$ = this._messagesStore$.asObservable();

  // new
  constructor() { }

  // success
  success(txt: string) {

    // add success
    this.add({
      message: txt,
      type: MessageTypes.Success
    });
  }

  // error
  error(txt: string) {

    // add error
    this.add({
      message: txt,
      type: MessageTypes.Error
    });
  }

  // generic add
  private add(message: MessageModel) {

    // get the list
    let list = this._messagesStore$.value;

    // add to the list
    list.push(message);

    // set time to expire
    setTimeout(() => {
      message.expired = true;
      this.accessExpirations();
    }, MESSAGE_EXPIRATION_MS);

    // next
    this._messagesStore$.next(list);
  }

  // access expirations
  accessExpirations() {

    // get the list
    let list = this._messagesStore$.value;

    // next
    this._messagesStore$.next(list.filter(x => !x.expired));
  }
}
