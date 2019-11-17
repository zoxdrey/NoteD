import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  @Output() changeState = new EventEmitter<boolean>();
  @Input() userName:string;
  isEditState: boolean;

  constructor() { }




  ngOnInit() {

  }




  change(increased:any) {
    console.log(increased);
    this.changeState.emit(increased);
  }
}
