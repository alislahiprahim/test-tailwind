import { CommonModule, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SlideToggleDirective } from '../../../directives/slide-toggle.directive';

@Component({
  selector: 'app-menu-categories',
  standalone: true,
  imports: [NgFor, SlideToggleDirective],
  template: `
    <h2 class="italic font-semibold text-lg cursor-pointer"  (click)="toggleMenu = !toggleMenu">Categories</h2>
    <div class="w-full h-px bg-gray-400 my-2"></div>
    <div  SlideToggle [isOpen]="toggleMenu">
    @for (cat of categories; track $index) {
      <div class="flex items-center justify-between">
        <div class="flex gap-2 items-center justify-between">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="#a3a3a3" d="M428.8 137.6h-86.177a115.52 115.52 0 0 0 2.176-22.4c0-47.914-35.072-83.2-92-83.2c-45.314 0-57.002 48.537-75.707 78.784c-7.735 12.413-16.994 23.317-25.851 33.253l-.131.146l-.129.148C135.662 161.807 127.764 168 120.8 168h-2.679c-5.747-4.952-13.536-8-22.12-8H32c-17.673 0-32 12.894-32 28.8v230.4C0 435.106 14.327 448 32 448h64c8.584 0 16.373-3.048 22.12-8h2.679c28.688 0 67.137 40 127.2 40h21.299c62.542 0 98.8-38.658 99.94-91.145c12.482-17.813 18.491-40.785 15.985-62.791A93.148 93.148 0 0 0 393.152 304H428.8c45.435 0 83.2-37.584 83.2-83.2c0-45.099-38.101-83.2-83.2-83.2m0 118.4h-91.026c12.837 14.669 14.415 42.825-4.95 61.05c11.227 19.646 1.687 45.624-12.925 53.625c6.524 39.128-10.076 61.325-50.6 61.325H248c-45.491 0-77.21-35.913-120-39.676V215.571c25.239-2.964 42.966-21.222 59.075-39.596c11.275-12.65 21.725-25.3 30.799-39.875C232.355 112.712 244.006 80 252.8 80c23.375 0 44 8.8 44 35.2c0 35.2-26.4 53.075-26.4 70.4h158.4c18.425 0 35.2 16.5 35.2 35.2c0 18.975-16.225 35.2-35.2 35.2M88 384c0 13.255-10.745 24-24 24s-24-10.745-24-24s10.745-24 24-24s24 10.745 24 24"/></svg>          <h3 class="text-gray-400">{{cat.name}}</h3>
        </div>
        <span class="text-gray-400">{{cat.items}}</span>
      </div>
    }
    </div>
   `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuCategoriesComponent {

  toggleMenu: boolean = true;
  categories: any[] = [
    { name: "breakfast", items: 22 },
    { name: "lunch", items: 9 },
    { name: "dinner", items: 4 },
    { name: "snacks", items: 10 },
    { name: "coffee", items: 21 },
    { name: "cold drinks", items: 5 },
  ]
}
