import { Component, Input } from '@angular/core';
import { MESSAGE_FROM } from 'src/app/enums/messageType.enum';

@Component({
  selector: 'omb-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() userFrom: number = MESSAGE_FROM.BOT;

  constructor() {}

  public getClassUserFrom = (): string =>
    this.userFrom === MESSAGE_FROM.BOT
      ? 'message__content message__content--bot'
      : 'message__content message__content--user';
}
