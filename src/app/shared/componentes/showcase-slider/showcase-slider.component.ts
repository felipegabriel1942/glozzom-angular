import { Component, OnInit, Input } from '@angular/core';
import { ShowcaseSlider } from './model/showcase-slider.model';

@Component({
  selector: 'app-showcase-slider',
  templateUrl: './showcase-slider.component.html',
  styleUrls: ['./showcase-slider.component.css']
})
export class ShowcaseSliderComponent {

  @Input() listaShowcase = new Array<ShowcaseSlider>();
 
  public setUrlImage(url: string): string{
    return 'url(' + url + ')';
  }

 
}
