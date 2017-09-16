import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTeamsComponent } from './active-teams.component';

describe('ActiveTeamsComponent', () => {
  let component: ActiveTeamsComponent;
  let fixture: ComponentFixture<ActiveTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
