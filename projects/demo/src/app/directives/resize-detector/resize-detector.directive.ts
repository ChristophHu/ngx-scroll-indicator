import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[resize-detector]',
  standalone: true
})
export class ResizeDetectorDirective implements OnInit{

  constructor(public el: ElementRef<HTMLElement>) { }

  ngOnInit(): void {
    this.detectResize()
  }

  @HostListener('window:resize') public detectResize(): void {
    console.log(this.el.nativeElement.offsetWidth)
    console.log(this.el.nativeElement.offsetHeight)
  }
}
