import { Component, OnInit } from '@angular/core';
import { ShowcaseSlider } from 'src/app/shared/componentes/showcase-slider/model/showcase-slider.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaDeDadosShowcaseSlider = new Array<ShowcaseSlider>();

  constructor() { }

  ngOnInit() {
    this.popularDadosDoShowCase();
  }

  popularDadosDoShowCase() {
    this.listaDeDadosShowcaseSlider.push(new ShowcaseSlider('Heading One',' Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    + 'Quod cum magnam voluptates veniam ab culpa alias ducimus ut ipsam quae.','../../../../assets/img/image1.jpg','Sign Up Now',''));
    this.listaDeDadosShowcaseSlider.push(new ShowcaseSlider('Heading Two',' Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    + 'Quod cum magnam voluptates veniam ab culpa alias ducimus ut ipsam quae.','../../../../assets/img/image2.jpg','Learn More',''));
    this.listaDeDadosShowcaseSlider.push(new ShowcaseSlider('Heading Three',' Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    + 'Quod cum magnam voluptates veniam ab culpa alias ducimus ut ipsam quae.','../../../../assets/img/image3.jpg','Make More',''))
  }

}
