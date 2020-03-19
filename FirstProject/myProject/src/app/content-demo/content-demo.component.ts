import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content-demo',
  templateUrl: './content-demo.component.html',
  styleUrls: ['./content-demo.component.css']
})
export class ContentDemoComponent implements OnInit {

  constructor() { }
 @ContentChild('contentchild') contentchildref :ElementRef;
  ngOnInit(): void {
  }
   
  ngAfterContentInit() :void{
    this.contentchildref.nativeElement.style.backgroundColor = 'yello';
    this.contentchildref.nativeElement.style.marginBottom = '12px';

  }
}
