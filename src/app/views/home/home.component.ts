import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  style: string = '';
  realocated: boolean = false;
  posicao1: string;
  posicao2: string;
  posicao3: string;
  posicao4: string;

  onStyleChange(style: string) : void {
    this.style = style;
  }

  subdued_and_professional: Array<string> = [
    '#90AFC5', '#336B87', '#2A3132', '#763626'
  ];

  cool_blues: Array<string> = [
    '#003B46', '#07575B', '#66A5AD', '#C4DFE6'
  ]

  primary_colors_with: Array<string> = [
    '#375E97', '#FB6542', '#FFBB00', '#3F681C'
  ];

  icy_blues: Array<string> = [
    '#F1F1F2', '#BCBABE', '#A1D6E2', '#1995AD'
  ]

  neutral_versatile: Array<string> = [
    '#626D71', '#CDCDC0', '#DDBC95', '#B38867'
  ]

  fun_tropical: Array<string> = [
    '#4897D8', '#FFDB5C', '#FA6E59', '#F8A055'
  ]

  spicy_neutrals: Array<string> = [
    '#AF4425', '#662E1C', '#EBDCB2', '#C9A66B'
  ]

  aqua_blues: Array<string> = [
    '#004D47', '#128277', '#52958B', '#B9C4C9'
  ]

  candy_bright: Array<string> = [
    '#F47D4A', '#E1315B', '#FFEC5C', '#008DCB'
  ]

  randomArray(array: Array<string>) {
    return Math.floor(Math.random() * array.length)
  }

  chooseColor(style: string) : string {
    switch (style) {
      case 'subdued_and_professional':
        const random =  this.randomArray(this.subdued_and_professional);
        return this.subdued_and_professional[random];
      case 'cool_blues':
        const random2 =  this.randomArray(this.cool_blues);
        return this.cool_blues[random2];
      case 'primary_colors_with':
        const random3 = this.randomArray(this.primary_colors_with);
        return this.primary_colors_with[random3];
      case 'icy_blues':
        const random4 = this.randomArray(this.icy_blues);
        return this.icy_blues[random4];
      case 'neutral_versatile':
        const random5 = this.randomArray(this.neutral_versatile);
        return this.neutral_versatile[random5];
      case 'fun_tropical':
        const random6 = this.randomArray(this.fun_tropical);
        return this.fun_tropical[random6];
      case 'spicy_neutrals':
        const random7 = this.randomArray(this.spicy_neutrals);
        return this.spicy_neutrals[random7];
      case 'aqua_blues':
        const random8 = this.randomArray(this.aqua_blues);
        return this.aqua_blues[random8];
      case 'candy_bright':
        const random9 = this.randomArray(this.candy_bright);
        return this.candy_bright[random9];
    }
  }



  ngOnInit(): void {
  }

}
