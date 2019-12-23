import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[taskStatusDir]'
})
export class TasksDirective implements OnInit {

  @Input('taskStatusDir') status: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.markTask(this.status);
  }

  markTask(status: string) {
    this.renderer.setStyle(this.el.nativeElement, 'border', '2px dotted black');
    if (status === 'completed') {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#129414');
    } else if (status === 'pending') {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#d68585');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
    }
  }

}
