import { Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMybgcolor]'
})
export class MybgcolorDirective {

  constructor(private eleRef:ElementRef, private rend2:Renderer2) { 
    // eleRef.nativeElement.style.backgroundColor = "gold"
    // eleRef.nativeElement.style.color = "red"
    // eleRef.nativeElement.style.fontSize = "55px"

    rend2.addClass(eleRef.nativeElement, 'mybgcssprops')
  }

}
