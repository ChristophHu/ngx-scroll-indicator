import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxScrollIndicatorComponent } from './ngx-scroll-indicator.component';

describe('NgxScrollIndicatorComponent', () => {
  let component: NgxScrollIndicatorComponent;
  let fixture: ComponentFixture<NgxScrollIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxScrollIndicatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxScrollIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
