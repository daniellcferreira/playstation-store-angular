import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  standalone: false,
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.css'
})
export class CardPricingComponent implements OnInit {

  @Input()
  gameType: string = '';
  @Input()
  gamePrice: string = '';

  constructor() {}

  ngOnInit(): void {}

}
