import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MESSAGE_FROM } from 'src/app/enums/messageFromType.enum';
import { MESSAGE_TYPE } from 'src/app/enums/messageType.enum';

import { IMessage } from 'src/app/models/message.model';
import { IText } from 'src/app/models/text.model';

@Component({
  selector: 'omb-chat-button',
  templateUrl: './chat-button.component.html',
  styleUrls: ['./chat-button.component.scss'],
})
export class ChatButtonComponent {
  @Input() textContent: IMessage<IText>;
  @Output() emitter = new EventEmitter<IMessage<IText>>();

  constructor() {}

  public sendText = () => {
    const text: IText = { text: `¿${this.textContent}?` };
    const message: IMessage<IText> = {
      userFrom: MESSAGE_FROM.USER,
      type: MESSAGE_TYPE.TEXT,
      content: { ...text },
    };
    this.emitter.emit(message);
  };
}
