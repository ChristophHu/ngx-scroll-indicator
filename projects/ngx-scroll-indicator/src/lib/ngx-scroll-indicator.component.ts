import { AsyncPipe, ViewportScroller } from '@angular/common';
import { Component, ElementRef, Host, HostListener, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'ngx-scroll-indicator',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './ngx-scroll-indicator.component.html',
  styleUrls: ['./ngx-scroll-indicator.component.sass']
})
export class NgxScrollIndicatorComponent {
  @Input() distanceToTop: number = 0
  @Input() distanceToBottom: number = 0
  
  private readonly _scrollIndicator = new BehaviorSubject<boolean>(false)
  scrollIndicator$: Observable<boolean> = this._scrollIndicator.asObservable()
  
  private readonly _scrollToTop = new BehaviorSubject<boolean>(false)
  scrollToTop$: Observable<boolean> = this._scrollToTop.asObservable()

  documentHeight: number = 0

  constructor(private readonly _viewportScroller: ViewportScroller, private el: ElementRef) { }
  
  ngOnInit(): void {
    this.documentHeight = document.documentElement.scrollHeight
    this._scrollIndicator.next(this.getViewEnd() < this.documentHeight)
    
    console.log('windowheight', window.innerHeight)
    console.log('scrollposition', this._viewportScroller.getScrollPosition()[1])
    console.log('document', document.documentElement.scrollHeight)

    // can you get the parent component of this element?
    const element = this.el.nativeElement.offsetParent; // scrollHeight, scrollTop
    console.log(this.el)
    // how to check the scrolling with an observable?



    console.log('windowheight', element.offsetHeight)
    console.log('scrollposition', element.scrollTop)
    console.log('document', element.scrollHeight)
  }

  // how to get the scroll position of the parent component?
  @HostListener('scroll', ['$event']) onScroll(event: any) {
    console.log('windowheight', window.innerHeight)
  }



  @HostListener('window:scroll', ['$event']) onWindowScroll(event: any) {
    this._scrollToTop.next(this.isToTopActive())
    const element = this.el.nativeElement.offsetParent; // scrollHeight, scrollTop
    console.log('windowheight', element.offsetHeight)
    console.log('scrollposition', element.scrollTop)
    console.log('document', element.scrollHeight)
  }
  @HostListener('window:resize', ['$event']) onWindowResize(event: any) {
    this._scrollIndicator.next(this.getViewEnd() < this.documentHeight)
    this._scrollToTop.next(this.isToTopActive())
  }

  getViewEnd(): number {
    return this._viewportScroller.getScrollPosition()[1] + window.innerHeight
  }
  isToTopActive(): boolean {
    if (this.distanceToTop) {
      return this._viewportScroller.getScrollPosition()[1] >= this.distanceToTop
    } else {
      return this.getViewEnd() >= (this.documentHeight - this.distanceToBottom)
    }
  }

  scrollToTop(elementId?: string): void {
    if (elementId) {
      this._viewportScroller.scrollToAnchor(elementId)
    } else {
      this._viewportScroller.scrollToPosition([0, 0])
    }
    this._scrollToTop.next(false)
  }
}
