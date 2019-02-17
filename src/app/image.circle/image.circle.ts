import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'img-circle',
  templateUrl: './image.circle.html',
  styleUrls: ['./image.circle.css']
})
export class ImageCircle implements OnInit{
  @Input() height: any;
  @Input() width: any;
  @Input() offsetX: any;
  @Input() offsetY: any;
  @Input() isBlank: boolean;
  @Input() backgroundColor?: any;
  @Input() src: any;
  @Input() title: any;

  ngOnInit () {
    if(this.backgroundColor == null) this.backgroundColor = "black";
  }

}
