import { NgModule } from '@angular/core';
import { MessageCenterComponent } from './message-center/message-center.component';
import { MessageComponent } from './message/message.component';

const COMPONENTS = [MessageComponent, MessageCenterComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SharedModule {}
