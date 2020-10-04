import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ChatButtonComponent } from './chat-button.component';

describe('ChatButtonComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ChatButtonComponent],
    }).compileComponents();
  });

  it('should create chat button component', () => {
    const fixture = TestBed.createComponent(ChatButtonComponent);
    const message = fixture.componentInstance;
    expect(message).toBeTruthy();
  });
});
