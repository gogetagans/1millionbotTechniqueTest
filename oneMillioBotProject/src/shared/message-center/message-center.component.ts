import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {
  faBars,
  faMinus,
  faChevronRight,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { MESSAGE_FROM } from 'src/app/enums/messageFromType.enum';
import { MESSAGE_TYPE } from 'src/app/enums/messageType.enum';
import { ICarouselImage } from 'src/app/models/carousel-image.model';
import { IMessage } from 'src/app/models/message.model';
import { IText } from 'src/app/models/text.model';

@Component({
  selector: 'omb-message-center',
  templateUrl: './message-center.component.html',
  styleUrls: ['./message-center.component.scss'],

  animations: [
    trigger('openClose', [
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 0, display: 'none' })),
      transition('false <=> true', [style({ display: 'block' }), animate(200)]),
    ]),
    trigger('collapse', [
      state('true', style({ height: 'auto' })),
      state('false', style({ height: '100px' })),
      transition('out <=> on', animate('700ms ease-in')),
    ]),
  ],
})
export class MessageCenterComponent implements OnInit, AfterViewChecked {
  public faBars: IconDefinition = faBars;
  public faMinus: IconDefinition = faMinus;
  public faChevronRight: IconDefinition = faChevronRight;
  public footerText = 'by 1millionbot';
  public botName = 'Bill';
  public opened: boolean = false;
  public collapsed: boolean = false;
  public messages = new Array<IMessage<any>>();
  public images = new Array<ICarouselImage>();
  public messageForm = new FormGroup({
    sendText: new FormControl(''),
  });

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

  public openMenu = (): void => {
    this.opened = !this.opened;
  };

  public collapseMenu = (): void => {
    this.collapsed = !this.collapsed;
  };

  public onClickedOutside = (event) => {
    if (this.collapsed && this.opened) this.opened = false;
  };

  public onSubmit = () => {
    const msg = this.messageForm.controls['sendText'].value;
    if (msg) {
      const content: IText = { text: msg };
      const newMessage: IMessage<IText> = {
        type: MESSAGE_TYPE.TEXT,
        userFrom: MESSAGE_FROM.USER,
        content: { ...content },
      };
      this.messages = [...this.messages, newMessage];
      this.messageForm.controls['sendText'].setValue(null);
    }
  };

  keyDownFunction = (event) => {
    if (event.keyCode === 13) this.onSubmit();
  };

  ngOnInit(): void {
    this.images = [
      {
        id: 'australian',
        src: 'https://picsum.photos/id/237/200/300',
      },
      { id: 'dachshund', src: 'https://picsum.photos/200/300?grayscale' },
      { id: 'shiba', src: 'https://picsum.photos/seed/picsum/200/300' },
    ];
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
      {
        userFrom: MESSAGE_FROM.USER,
        type: MESSAGE_TYPE.PICTURE,
        content: [
          {
            id: 'dog',
            src: 'https://picsum.photos/id/237/200/300',
          },
          { id: 'mountain', src: 'https://picsum.photos/200/300?grayscale' },
          { id: 'clouds', src: 'https://picsum.photos/seed/picsum/200/300' },
        ],
      },
    ];
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }
}
