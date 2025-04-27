import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-bar',
  standalone: false,
  templateUrl: './news-bar.component.html',
  styleUrl: './news-bar.component.css'
})
export class NewsBarComponent implements OnInit {

  @Input()
  newsBarPhoto:string = "";
  @Input()
  newsBarTitle:string = "";
  @Input()
  newsBarDescription:string = "";

  constructor() { }

  ngOnInit(): void {}
}
