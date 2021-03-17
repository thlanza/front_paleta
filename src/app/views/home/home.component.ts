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
    this.chooseColor(style);
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

  randomArray(array: Array<string>): number {
    return Math.floor(Math.random() * array.length)
  }

  choosePosition(array: Array<string>): void {
    const random = this.randomArray(array);
    this.posicao1 = array[random];
    let arrayCopy = [...array];
    arrayCopy.splice(random, 1);
    const random2 = this.randomArray(arrayCopy);
    this.posicao2 = arrayCopy[random2];
    arrayCopy.splice(random2, 1);
    const random3 = this.randomArray(arrayCopy);
    this.posicao3 = arrayCopy[random3];
    arrayCopy.splice(random3, 1);
    this.posicao4 = arrayCopy[0];
  }

  chooseColor(style: string) : void {
    switch (style) {
      case 'subdued_and_professional':
        this.choosePosition(this.subdued_and_professional);
        break;
      case 'cool_blues':
        this.choosePosition(this.cool_blues);
        break;
      case 'primary_colors_with':
        this.choosePosition(this.primary_colors_with);
        break;
      case 'icy_blues':
       this.choosePosition(this.icy_blues);
       break;
      case 'neutral_versatile':
        this.choosePosition(this.neutral_versatile);
        break;
      case 'fun_tropical':
        this.choosePosition(this.fun_tropical);
        break;
      case 'spicy_neutrals':
        this.choosePosition(this.spicy_neutrals);
        break;
      case 'aqua_blues':
        this.choosePosition(this.aqua_blues);
        break;
      case 'candy_bright':
        this.choosePosition(this.candy_bright);
        break;
    }
  }



  ngOnInit(): void {
  }

}
