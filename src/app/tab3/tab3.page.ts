import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor() {}
  option = {
    slidesPerView: 2.0,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
  };
}
