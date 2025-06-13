import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxScrollIndicatorComponent } from '../../../../ngx-scroll-indicator/src/public-api';

@Component({
  selector: 'app-template',
  imports: [
    CommonModule,
    NgxScrollIndicatorComponent
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.sass'
})
export class TemplateComponent {
  
}
