import {Directive, ElementRef, Renderer, Inject} from 'angular2/core';

@Directive({
  selector: '[version]'
})
export class Version {
  constructor(element: ElementRef, renderer: Renderer, @Inject('config') config) {
    // for server/webworker support use the renderer
    renderer.setText(element.nativeElement, config.version);
  }
}
