import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ImageCardComponent } from './image-card.component';

describe('ImageCardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ImageCardComponent],
    }).compileComponents();
  });

  it('should create chat button component', () => {
    const fixture = TestBed.createComponent(ImageCardComponent);
    const message = fixture.componentInstance;
    expect(message).toBeTruthy();
  });
});
