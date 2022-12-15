import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetDetailComponent } from './bottom-sheet-detail.component';

describe('BottomSheetDetailComponent', () => {
  let component: BottomSheetDetailComponent;
  let fixture: ComponentFixture<BottomSheetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSheetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
