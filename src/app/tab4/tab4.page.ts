import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {
  constructor() {}

  option = {
    slidesPerView: 2.0,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
  };
}
