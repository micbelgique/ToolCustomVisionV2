import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLocalComponent } from './test-local.component';

describe('TestLocalComponent', () => {
  let component: TestLocalComponent;
  let fixture: ComponentFixture<TestLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
