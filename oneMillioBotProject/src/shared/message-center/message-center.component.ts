import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import {
  faBars,
  faMinus,
  faChevronRight,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { MESSAGE_FROM } from 'src/app/enums/messageFromType.enum';
import { MESSAGE_TYPE } from 'src/app/enums/messageType.enum';
import { IMessage } from 'src/app/models/message.model';

@Component({
  selector: 'omb-message-center',
  templateUrl: './message-center.component.html',
  styleUrls: ['./message-center.component.scss'],
})
export class MessageCenterComponent implements OnInit, AfterViewChecked {
  public faBars: IconDefinition = faBars;
  public faMinus: IconDefinition = faMinus;
  public faChevronRight: IconDefinition = faChevronRight;
  public footerText = 'by 1millionbot';
  public botName = 'Bill';
  public messages = new Array<IMessage<any>>();

  @ViewChild('scrollMe') private bodyScroll: ElementRef;

  constructor() {}

  public setStyleByUserFrom = (userFrom: number): string =>
    userFrom === MESSAGE_FROM.BOT ? 'bot__style' : 'user__style';

  public scrollToBottom = (): void => {
    try {
      this.bodyScroll.nativeElement.scrollTop = this.bodyScroll.nativeElement.scrollHeight;
    } catch (err) {}
  };

  public getTextEmitted = (event): void => {
    this.messages = [...this.messages, event];
  };

  ngOnInit(): void {
    this.messages = [
      {
        userFrom: MESSAGE_FROM.BOT,
        type: MESSAGE_TYPE.TEXT,
        content: {
          text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
        fugiat architecto dignissimos sed iusto praesentium harum quis
        voluptatum beatae, debitis assumenda, similique repellat quasi.`,
        },
      },
      {
        userFrom: MESSAGE_FROM.USER,
        type: MESSAGE_TYPE.TEXT,
        content: {
          text: `Lorem ipsum dolor, sit amet consectetur`,
        },
      },
      {
        userFrom: MESSAGE_FROM.BOT,
        type: MESSAGE_TYPE.TEXT,
        content: {
          text: `Lorem ipsum dolor, sit amet consectetur`,
        },
      },
      {
        userFrom: MESSAGE_FROM.USER,
        type: MESSAGE_TYPE.TEXT,
        content: {
          text: `Lorem ipsum dolor, sit amet consectetur`,
        },
      },
    ];
    this.scrollToBottom();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }
}
