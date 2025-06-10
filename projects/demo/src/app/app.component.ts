import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Section {
  title: string
  activated: boolean
  fragment: string
  offsetTop: number
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {

  private readonly _sections = new BehaviorSubject<Section[]>([])
  sections$: Observable<any> = this._sections.asObservable()
  
  private _sectionsAhead: Section[] = []
  private _currentSection: Section = { title: '', activated: false, fragment: '', offsetTop: 0 }

  constructor(private readonly _viewportScroller: ViewportScroller, public el: ElementRef<HTMLElement>) { }
  
  @HostListener('window:scroll', ['$event']) onWindowScroll(event: any) {
    let currentScrollPosition = this._viewportScroller.getScrollPosition()[1]
    this._sectionsAhead = this._sections.value.filter(page => page.offsetTop >= currentScrollPosition)
    this._currentSection = this._sectionsAhead[0]
    this._sections.value.forEach(page => page.activated = page.fragment === this._currentSection.fragment)
  }

  @HostListener('window:resize') public detectResize(): void {
    console.log(this.el.nativeElement.offsetWidth)
    console.log(this.el.nativeElement.offsetHeight)
  }
}
