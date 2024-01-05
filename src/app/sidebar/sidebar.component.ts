import { CommonModule, } from '@angular/common';
import { Component, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div class="sidebar" [class.active]="isOpen">
    <ng-content #sidebarContent></ng-content>
</div>
<div class="overlay" [class.active]="isOpen" (click)="closeSidebar()"></div>
  `,
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnChanges {
  @Input() isOpen = false;

  constructor(private renderer: Renderer2) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['isOpen'].isFirstChange()) {
      console.log('changes', changes);
      if (this.isOpen)
        this.openSidebar()
      else
        this.closeSidebar()
    }
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (this.isOpen) {
      this.closeSidebar();
    }
  }

  openSidebar() {
    this.isOpen = true;
    console.log('this.renderer', this.renderer);
    // this.renderer.addClass('body', 'overflow-hidden')
  }

  closeSidebar() {
    this.isOpen = false;
    // this.renderer.removeClass('body', 'overflow-hidden')
  }
}
