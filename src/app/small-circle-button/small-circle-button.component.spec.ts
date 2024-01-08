import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCircleButtonComponent } from './small-circle-button.component';

describe('SmallCircleButtonComponent', () => {
  let component: SmallCircleButtonComponent;
  let fixture: ComponentFixture<SmallCircleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallCircleButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallCircleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
