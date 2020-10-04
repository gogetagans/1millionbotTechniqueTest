import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageCenterComponent } from './message-center.component';

describe('MessageCenterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MessageCenterComponent],
    }).compileComponents();
  });

  it('should create message center component', () => {
    const fixture = TestBed.createComponent(MessageCenterComponent);
    const message = fixture.componentInstance;
    expect(message).toBeTruthy();
  });
});
