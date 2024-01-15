import { CommonModule, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MenuCategoriesComponent } from './menu-categories/menu-categories.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuItemComponent, NgFor, SearchBarComponent, MenuCategoriesComponent, RecentPostsComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  items: any[] = [1, , 2, 3, 4, 5, 6]
}
