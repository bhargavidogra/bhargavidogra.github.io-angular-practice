import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-outputdemo',
  templateUrl: './outputdemo.component.html',
  styleUrls: ['./outputdemo.component.css']
})
export class OutputdemoComponent implements OnInit {

  constructor() { }
@Output('smthigchanged') outputdemotext :EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
  }

  keypressHandler(event : any){
    const inputText = event.target.value;

    // lets annouce outside world something changed
    this.outputdemotext.emit(inputText);
  }
}
