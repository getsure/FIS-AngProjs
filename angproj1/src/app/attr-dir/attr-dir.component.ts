import { Component } from '@angular/core';

@Component({
  selector: 'app-attr-dir',
  templateUrl: './attr-dir.component.html',
  styleUrl: './attr-dir.component.css'
})
export class AttrDirComponent {
  isClassOneApply:boolean = true;
  isClassTwoApply:boolean = false;

  colorProp:string= "white"
  bgcolorProp:string = "blue"
}
