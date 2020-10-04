import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChatButtonComponent } from './chat-button/chat-button.component';
import { MessageCenterComponent } from './message-center/message-center.component';
import { MessageComponent } from './message/message.component';

const COMPONENTS = [
  MessageComponent,
  MessageCenterComponent,
  ChatButtonComponent,
];
const MODULES = [FontAwesomeModule, BrowserModule];

@NgModule({
  imports: [MODULES],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SharedModule {}
