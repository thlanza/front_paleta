import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  constructor() { }

  style: string = '';

  onStyleChange(style: string) : void {
    this.style = style
  }

  ngOnInit(): void {
  }

  chooseRodapeColor(style: string) : string {
    switch (style) {
      case 'subdued_and_professional':
        return '#763626'
      case 'cool_blues':
        return '#07575B';
      case 'primary_colors_with':
        return '#FFBB00'
    }
  }



}
