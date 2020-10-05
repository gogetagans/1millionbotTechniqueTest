import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarouselController } from 'ng-simple-carousel';
import { MESSAGE_FROM } from 'src/app/enums/messageFromType.enum';
import { MESSAGE_TYPE } from 'src/app/enums/messageType.enum';
import { ICarouselImage } from 'src/app/models/carousel-image.model';

import { IMessage } from 'src/app/models/message.model';
import { IText } from 'src/app/models/text.model';

@Component({
  selector: 'omb-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})
export class ImageCardComponent {
  @Input() textContent: IMessage<IText>;
  @Input() images: ICarouselImage[] = [];
  @Output() emitter = new EventEmitter<IMessage<IText>>();

  controller = new CarouselController();
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
