import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child-demo',
  templateUrl: './view-child-demo.component.html',
  styleUrls: ['./view-child-demo.component.css']
})
export class ViewChildDemoComponent implements OnInit {

  @ViewChild('childref') viewChild:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.viewChild.nativeElement.style.backgroundColor = 'lightblue';
  }

}
