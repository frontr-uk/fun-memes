import { Component, OnInit, Input } from '@angular/core';
export interface IMeme{
  id: string, name: string, url: string, 
  width: number, height: number, box_count: number 
}
@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.scss']
})
export class MemeComponent implements OnInit {
  @Input() meme: IMeme;
  constructor() { }

  ngOnInit() {
  }

}
