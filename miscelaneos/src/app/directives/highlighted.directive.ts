import { Directive, ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  constructor(private el :ElementRef) { 
    console.log("directive called")
    
  }
  @Input('appHighlighted') colorhig:string;

  @HostListener('mouseenter') mouseInside(){
    this.resaltar(this.colorhig || 'green');    
  }

  @HostListener('mouseleave') mouseLeave(){
    this.resaltar(null);
  }
  private resaltar(color:String){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
