import { AsyncPipe, ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { NgxScrollIndicatorComponent } from '../../../ngx-scroll-indicator/src/public-api';

export interface Section {
  title: string
  activated: boolean
  fragment: string
  offsetTop: number
}

@Component({
  selector: 'app-root',
  imports: [
    NgxScrollIndicatorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {

  // private readonly _sections = new BehaviorSubject<Section[]>([])
  // sections$: Observable<any> = this._sections.asObservable()
  
  // private _sectionsAhead: Section[] = []
  // private _currentSection: Section = { title: '', activated: false, fragment: '', offsetTop: 0 }

  // @Input() distanceToTop: number = 0
  // @Input() distanceToBottom: number = 200
  
  // private readonly _scrollIndicator = new BehaviorSubject<boolean>(false)
  // scrollIndicator$: Observable<boolean> = this._scrollIndicator.asObservable()
  
  // private readonly _scrollToTop = new BehaviorSubject<boolean>(false)
  // scrollToTop$: Observable<boolean> = this._scrollToTop.asObservable()

  // documentHeight: number = 0

  // constructor(private readonly _viewportScroller: ViewportScroller, public el: ElementRef<HTMLElement>) { }
  
  // ngOnInit(): void {
  //   // console.log('windowheight', window.innerHeight)
  //   // console.log('scrollposition', this._viewportScroller.getScrollPosition()[1])
  //   // console.log('document', document.documentElement.scrollHeight)
  //   this.documentHeight = document.documentElement.scrollHeight
  //   this._scrollIndicator.next(this.getViewEnd() < this.documentHeight)
  // }

  // @HostListener('window:scroll', ['$event']) onWindowScroll(event: any) {
  //   // let currentScrollPosition = this._viewportScroller.getScrollPosition()[1]
  //   // this._sectionsAhead = this._sections.value.filter(page => page.offsetTop >= currentScrollPosition)
  //   // this._currentSection = this._sectionsAhead[0]
  //   // this._sections.value.forEach(page => page.activated = page.fragment === this._currentSection.fragment)
  //   this._scrollToTop.next(this.isToTopActive())
  // }
  // @HostListener('window:resize', ['$event']) onWindowResize(event: any) {
  //   this._scrollIndicator.next(this.getViewEnd() < this.documentHeight)
  //   this._scrollToTop.next(this.isToTopActive())
  // }

  // getViewEnd(): number {
  //   return this._viewportScroller.getScrollPosition()[1] + window.innerHeight
  // }
  // isToTopActive(): boolean {
  //   if (this.distanceToTop) {
  //     return this._viewportScroller.getScrollPosition()[1] >= this.distanceToTop
  //   } else {
  //     return this.getViewEnd() >= (this.documentHeight - this.distanceToBottom)
  //   }
  // }

  // scrollToTop(elementId?: string): void {
  //   if (elementId) {
  //     this._viewportScroller.scrollToAnchor(elementId)
  //   } else {
  //     this._viewportScroller.scrollToPosition([0, 0])
  //   }
  //   this._scrollToTop.next(false)
  // }
}
