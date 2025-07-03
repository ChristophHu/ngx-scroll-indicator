import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'ngx-scroll-indicator',
  standalone: true,
  imports: [],
  templateUrl: './ngx-scroll-indicator.component.html',
  styleUrls: ['./ngx-scroll-indicator.component.sass']
})
export class NgxScrollIndicatorComponent implements AfterViewInit {

  private parentElement: any

  constructor(private elRef: ElementRef) { }
  
  ngAfterViewInit(): void {
    console.log('NgxScrollIndicatorComponent initialized');

    const element = this.elRef.nativeElement as HTMLElement
    const scrollableParents = this.findScrollableParents(element)

    console.log('Scrollbare Eltern:', scrollableParents)
    console.log('Type Scrollbare Eltern:', typeof(scrollableParents[0]))
  }

  findScrollableParents(element: HTMLElement): HTMLElement[] {
    const scrollables: HTMLElement[] = []
    let current: HTMLElement | null = element

    while (current) {
      const hasScrollableContent = current.scrollHeight > current.clientHeight || current.scrollWidth > current.clientWidth

      const overflowY = window.getComputedStyle(current).overflowY
      const overflowX = window.getComputedStyle(current).overflowX
      const isScrollableY = overflowY === 'auto' || overflowY === 'scroll'
      const isScrollableX = overflowX === 'auto' || overflowX === 'scroll'

      if ((hasScrollableContent && (isScrollableY || isScrollableX))) {
        scrollables.push(current)
      }

      current = current.parentElement
    }

    return scrollables
  }

}
