import { Component } from '@angular/core';
import { MESSAGE_FROM } from 'src/app/enums/messageType.enum';

@Component({
  selector: 'omb-message-center',
  templateUrl: './message-center.component.html',
  styleUrls: ['./message-center.component.scss'],
})
export class MessageCenterComponent {
  constructor() {}

  public setStyleByUserFrom = (userFrom: number) =>
    userFrom === MESSAGE_FROM.BOT ? 'bot__style' : 'user__style';
}
