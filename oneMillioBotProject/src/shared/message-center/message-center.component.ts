import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MESSAGE_FROM } from 'src/app/enums/messageType.enum';

import {
  faBars,
  faMinus,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'omb-message-center',
  templateUrl: './message-center.component.html',
  styleUrls: ['./message-center.component.scss'],
})
export class MessageCenterComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private bodyScroll: ElementRef;
  public footer_text = 'by 1millionbot';
  public botName = 'Bill';
  public faBars = faBars;
  public faMinus = faMinus;
  public faChevronRight = faChevronRight;

  constructor() {}

  public setStyleByUserFrom = (userFrom: number): string =>
    userFrom === MESSAGE_FROM.BOT ? 'bot__style' : 'user__style';

  public scrollToBottom = (): void => {
    try {
      this.bodyScroll.nativeElement.scrollTop = this.bodyScroll.nativeElement.scrollHeight;
    } catch (err) {}
  };

  ngOnInit(): void {
    this.scrollToBottom();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }
}
