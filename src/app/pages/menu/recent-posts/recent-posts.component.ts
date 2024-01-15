import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SlideToggleDirective } from '../../../directives/slide-toggle.directive';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-recent-posts',
  standalone: true,
  imports: [NgFor, SlideToggleDirective, MenuItemComponent],
  template: `    
    <h2 class="italic font-semibold text-lg cursor-pointer"  (click)="toggleMenu = !toggleMenu">Recent RecentPostsComponent</h2>
    <div class="w-full h-px bg-gray-400 my-2"></div>
    <div  SlideToggle [isOpen]="toggleMenu">
    @for (cat of menuItems; track $index) {
      <menu-item [noContent]="true" [noShadow]="true"></menu-item>
      <br>
    }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentPostsComponent {
  toggleMenu: boolean = true;
  menuItems: any[] = [
    { name: "breakfast", items: 22 },
    { name: "lunch", items: 9 },
    { name: "dinner", items: 4 },
    { name: "snacks", items: 10 },
    { name: "coffee", items: 21 },
    { name: "cold drinks", items: 5 },
  ]
}
