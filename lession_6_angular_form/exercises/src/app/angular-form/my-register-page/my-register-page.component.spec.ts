import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRegisterPageComponent } from './my-register-page.component';

describe('MyRegisterPageComponent', () => {
  let component: MyRegisterPageComponent;
  let fixture: ComponentFixture<MyRegisterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRegisterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
