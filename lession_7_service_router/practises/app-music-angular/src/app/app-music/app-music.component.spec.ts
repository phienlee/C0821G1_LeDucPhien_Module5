import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMusicComponent } from './app-music.component';

describe('AppMusicComponent', () => {
  let component: AppMusicComponent;
  let fixture: ComponentFixture<AppMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
