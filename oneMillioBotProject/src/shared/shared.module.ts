import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSimpleCarouselModule } from 'ng-simple-carousel';
import { ChatButtonComponent } from './chat-button/chat-button.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { MessageCenterComponent } from './message-center/message-center.component';
import { MessageComponent } from './message/message.component';

const COMPONENTS = [
  MessageComponent,
  MessageCenterComponent,
  ChatButtonComponent,
  ImageCardComponent,
];
const MODULES = [FontAwesomeModule, BrowserModule, NgSimpleCarouselModule];

@NgModule({
  imports: [MODULES],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SharedModule {}
