import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inputdemo',
  templateUrl: './inputdemo.component.html',
  styleUrls: ['./inputdemo.component.css']
})
export class InputdemoComponent implements OnInit {


  constructor() { }

  @Input('sometext') somdetextfromoutside :String;
  ngOnInit(): void {
  }

}
