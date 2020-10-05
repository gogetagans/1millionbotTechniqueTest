import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSimpleCarouselModule } from 'ng-simple-carousel';
import { ChatButtonComponent } from './chat-button/chat-button.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { MessageCenterComponent } from './message-center/message-center.component';
import { MessageComponent } from './message/message.component';

import { ClickOutsideModule } from 'ng-click-outside';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
  MessageComponent,
  MessageCenterComponent,
  ChatButtonComponent,
  ImageCardComponent,
];
const MODULES = [
  FontAwesomeModule,
  BrowserModule,
  NgSimpleCarouselModule,
  BrowserAnimationsModule,
  ClickOutsideModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: [MODULES],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SharedModule {}
