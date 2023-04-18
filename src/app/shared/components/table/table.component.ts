import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() Objects!: Array<any>;
  @Input() ExtraCol!:string;
  @Output() onClickEvent: EventEmitter<any> = new EventEmitter<any>();

  cols: Array<string> = new Array<string>();

  ngOnInit(): void {
    for (const key in this.Objects[0]) {
      if (Object.prototype.hasOwnProperty.call(this.Objects[0], key)) {
        this.cols.push(key);
      }
    }
  }

  
  onClickEditHandler(obj:any){
      const objToHandle = {obj:obj,mode:'edit'}
      this.onClickEvent.emit(objToHandle);
  }
  
  onClickDeleteHandler(obj:any){
    const objToHandle = {obj:obj,mode:'delete'}
    this.onClickEvent.emit(objToHandle);
  }
}
