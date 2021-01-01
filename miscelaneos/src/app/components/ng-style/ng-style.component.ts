import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="size">
      ng-style works!
    </p>

    <button class="btn btn-primary" (click)="size= size+ 5">
    <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-warning" (click)="size= size- 5">
    <i class="fa fa-minus"></i>
    </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {
  size :number = 40;
  constructor() { }

  ngOnInit(): void {
  }

}
