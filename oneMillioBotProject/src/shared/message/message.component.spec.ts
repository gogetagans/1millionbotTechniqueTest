import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageComponent } from './message.component';

describe('MessageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MessageComponent],
    }).compileComponents();
  });

  it('should create message component', () => {
    const fixture = TestBed.createComponent(MessageComponent);
    const message = fixture.componentInstance;
    expect(message).toBeTruthy();
  });
});
