# Ngx-Scroll-Indicator

## Frameworks and Languages
<p align="left">
  <img alt="Static Badge" src="https://img.shields.io/badge/19.2.0-000000?style=for-the-badge&logo=angular&logoColor=white&label=Angular&labelColor=000000"><br>
  <img alt="Static Badge" src="https://img.shields.io/badge/4.1.3-000000?style=for-the-badge&logo=tailwindcss&logoColor=white&label=Tailwind&labelColor=06B6D4&color=000000"><br>
  <img alt="Static Badge" src="https://img.shields.io/badge/5.7.2-000000?style=for-the-badge&logo=typescript&logoColor=white&label=Typescript&labelColor=007ACC&color=000000">
</p>

## Demo
<p align="center">
  <a href="https://christophhu.github.io/ngx-scroll-indicator"><img src="https://github.com/ChristophHu/ChristophHu/blob/main/assets/gif/ngx-scroll-indicator.gif" width="500" alt="image" /></a>
</p>

## Description
This Repository contains a simple Angular library to display a scroll indicator at the bottom of the page. The user can scroll to the top of the page by clicking on the indicator. The indicator is displayed the hole time as an animation, that the user cann scroll down. At the bottom of the page, the indicator is displayed as a button to scroll to the top.
The library is easy to use and can be installed via [npm](https://www.npmjs.com/package/@christophhu/ngx-scroll-indicator).

## Installation
```bash
npm i @christophhu/ngx-scroll-indicator
```

## Use
### With default toggle
```html
<debug-mode></debug-mode>
```

### With custom toggle
```html
<debug-mode>
  <input type="checkbox" class="toggle" id="toggle" (change)="toggleDebug()"/>
</debug-mode>
```

```typescript
import { DebugModeService, DebugModeComponent } from "@christophhu/ngx-debug-mode";

@Component({
  ...
  imports: [
    DebugModeComponent
  ],
  providers: [
    DebugModeService
  ]
})
export class TestComponent {
  
  constructor(private _debugModeService: DebugModeService) {}

  toggleDebug() {
    this._debugModeService.toggleDebug()
  }
  getDebug(): Observable<boolean> {
    return this._debugModeService.debug$
  }
}
```
