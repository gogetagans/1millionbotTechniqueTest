import { NgModule } from '@angular/core';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [MessageComponent],
  exports: [MessageComponent],
})
export class SharedModule {}
