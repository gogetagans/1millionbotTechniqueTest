import { Component, Input } from '@angular/core';

@Component({
  selector: 'omb-chat-button',
  templateUrl: './chat-button.component.html',
  styleUrls: ['./chat-button.component.scss'],
})
export class ChatButtonComponent {
  @Input() textContent: string;
  constructor() {}
}
