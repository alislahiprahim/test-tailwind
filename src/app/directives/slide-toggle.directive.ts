// slide-toggle.directive.ts

import { Input, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[SlideToggle]',
    standalone: true,
})
export class SlideToggleDirective {

    @Input() isOpen: boolean = true;
    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.classList.add('slide-content')
    }

    ngOnChanges() {
        const contentElement = this.el.nativeElement;
        if (this.isOpen)
            contentElement.classList.add('open');
        else
            contentElement.classList.remove('open');
    }

}
