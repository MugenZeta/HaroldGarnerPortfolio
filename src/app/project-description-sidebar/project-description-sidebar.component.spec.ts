import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDescriptionSidebarComponent } from './project-description-sidebar.component';

describe('ProjectDescriptionSidebarComponent', () => {
  let component: ProjectDescriptionSidebarComponent;
  let fixture: ComponentFixture<ProjectDescriptionSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDescriptionSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDescriptionSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
