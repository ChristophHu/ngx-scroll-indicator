import { AsyncPipe, ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
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
  imports: [
    AsyncPipe,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {

  private readonly _sections = new BehaviorSubject<Section[]>([])
  sections$: Observable<any> = this._sections.asObservable()
  
  private _sectionsAhead: Section[] = []
  private _currentSection: Section = { title: '', activated: false, fragment: '', offsetTop: 0 }

  private readonly _scrollIndicator = new BehaviorSubject<boolean>(false)
  scrollIndicator$: Observable<boolean> = this._scrollIndicator.asObservable()
  
  private readonly _scrollToTop = new BehaviorSubject<boolean>(false)
  scrollToTop$: Observable<boolean> = this._scrollToTop.asObservable()

  constructor(private readonly _viewportScroller: ViewportScroller, public el: ElementRef<HTMLElement>) { }
  
  ngOnInit(): void {
    console.log('windowheight', window.innerHeight)
    console.log('scrollposition', this._viewportScroller.getScrollPosition()[1])
    console.log('document', document.documentElement.scrollHeight)
    this._scrollIndicator.next(this._viewportScroller.getScrollPosition()[1] + window.innerHeight < document.documentElement.scrollHeight)
    this._scrollToTop.next(this._viewportScroller.getScrollPosition()[1] + window.innerHeight < document.documentElement.scrollHeight)
    this.scrollIndicator$.subscribe((visible: boolean) => {
      console.log('Scroll indicator visibility:', visible)
    })
    this.scrollToTop$.subscribe((visible: boolean) => {
      console.log('Scroll to top:', visible)
    })
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll(event: any) {
    // let currentScrollPosition = this._viewportScroller.getScrollPosition()[1]
    // this._sectionsAhead = this._sections.value.filter(page => page.offsetTop >= currentScrollPosition)
    // this._currentSection = this._sectionsAhead[0]
    // this._sections.value.forEach(page => page.activated = page.fragment === this._currentSection.fragment)
    console.log(this._viewportScroller.getScrollPosition()[1] + window.innerHeight < document.documentElement.scrollHeight)
  }
  // add a hostlistener for window resize to detect if the scroll indicator is visible
  @HostListener('window:resize', ['$event']) onWindowResize(event: any) {
    console.log('windowheight', window.innerHeight)
    console.log('scrollposition', this._viewportScroller.getScrollPosition()[1])
    console.log('document', document.documentElement.scrollHeight)
    this._scrollIndicator.next(this._viewportScroller.getScrollPosition()[1] + window.innerHeight < document.documentElement.scrollHeight)
  }
}
