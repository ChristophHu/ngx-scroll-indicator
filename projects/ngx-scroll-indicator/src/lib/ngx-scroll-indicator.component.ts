import { AsyncPipe, ViewportScroller } from '@angular/common';
import { Component, ElementRef, Host, HostListener, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface IScrollableElement {
  height: number
  scrollHeight: number
  scrollPosition: number
}

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
  @Input() scrollableContent: HTMLElement | any
  @Input() distanceToTop: number = 0
  @Input() distanceToBottom: number = 0
  @Input() set change(value: Observable<boolean>) {
    value.subscribe({
      next: () => {
        this.checkScrollableContent()
      }
    })
  }
  
  private readonly _scrollIndicator = new BehaviorSubject<boolean>(false)
  scrollIndicator$: Observable<boolean> = this._scrollIndicator.asObservable()
  
  private readonly _scrollToTop = new BehaviorSubject<boolean>(false)
  scrollToTop$: Observable<boolean> = this._scrollToTop.asObservable()

  documentHeight: number = 0
  private parentElement: any

  @HostListener("window:resize", []) public onResize() {
    // this.checkScrollableContent()
    console.log('window resized')
  }

  @HostListener('window:scroll', []) scroll() {
    console.log('window scrolled')
    // if ((this.scrollableContent.scrollHeight - (this.scrollableContent.scrollTop + this.scrollableContent.offsetHeight)) <= 0) this.isScrollAtBottom = true
    // if (this.scrollableContent.scrollTop <= 0) this.isScrollAtBottom = false
  }

  constructor(private readonly _viewportScroller: ViewportScroller, private el: ElementRef) { }
  
  ngOnInit(): void {
    this.documentHeight = document.documentElement.scrollHeight
    this._scrollIndicator.next(this.getViewEnd() < this.documentHeight)
    
    // window height, scroll position, document height
    console.log('windowheight', window.innerHeight)
    console.log('scrollposition', this._viewportScroller.getScrollPosition()[1])
    console.log('document', document.documentElement.scrollHeight)

    // can you get the parent component of this element?
    this.parentElement = this.el.nativeElement.offsetParent; // scrollHeight, scrollTop
    console.log(this.el)
    // how to check the scrolling with an observable?

    // element height, element scrollposition, element scrollheight
    console.log('parentElement height', this.parentElement.offsetHeight)
    console.log('parentElement scrollposition', this.parentElement.scrollTop)
    console.log('parentElement scrollheight', this.parentElement.scrollHeight)

    this.checkScrollableContent()
  }

  // @HostListener('window:scroll', ['$event']) onWindowScroll(event: any) {
  //   this._scrollToTop.next(this.isToTopActive())
  //   const element = this.el.nativeElement.offsetParent; // scrollHeight, scrollTop
  //   console.log('windowheight', element.offsetHeight)
  //   console.log('scrollposition', element.scrollTop)
  //   console.log('document', element.scrollHeight)
  // }
  // @HostListener('window:resize', ['$event']) onWindowResize(event: any) {
  //   this._scrollIndicator.next(this.getViewEnd() < this.documentHeight)
  //   this._scrollToTop.next(this.isToTopActive())
  // }

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

  checkScrollableContent() {
    console.log('checkScrollableContent', this.scrollableContent)
    setTimeout(() => {
      if (this.scrollableContent.scrollHeight > this.scrollableContent.offsetHeight) {
        // this.isScrollIndicatorShown = true
      } else {
        // this.isScrollIndicatorShown = false
      }
    }, 100)
  }

  // public scrollToTop(): void {
  //   this.scrollableContent.scroll({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth'
  //   })
  //   this.isScrollAtBottom = false
  // }
}
