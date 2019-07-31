import { Component, OnInit } from '@angular/core';
import { MemesService } from 'src/app/services/memes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-memes-list',
  templateUrl: './memes-list.component.html',
  styleUrls: ['./memes-list.component.scss']
})
export class MemesListComponent implements OnInit {
  public memes$: Observable<any>;
  constructor(private memesService: MemesService) { }

  ngOnInit() {
    this.memes$ = this.memesService.getMemes();
  }

}
