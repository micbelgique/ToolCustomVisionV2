import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
import { Objects } from '../utilities/object';

@Component({
  selector: 'app-bottom-sheet-detail',
  templateUrl: './bottom-sheet-detail.component.html',
  styleUrls: ['./bottom-sheet-detail.component.css']
})
export class BottomSheetDetailComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetDetailComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: Objects) {}

  ngOnInit() {}

}
