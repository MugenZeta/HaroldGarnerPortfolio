import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSpreadComponent } from './icon-spread.component';

describe('IconSpreadComponent', () => {
  let component: IconSpreadComponent;
  let fixture: ComponentFixture<IconSpreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconSpreadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconSpreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
