import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  mobileMenu: boolean = false;
  toggleCart: boolean = false;
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    let allDropdowns: any[] = [];
    allDropdowns = this.elementRef.nativeElement.querySelectorAll('.dropdown');
    Array.from(allDropdowns).forEach(d => {
      let dropdownList = d.querySelector('.dropdown-list')
      d.addEventListener('click', (event: any) => {
        console.log('event', event, dropdownList);
        if (dropdownList.classList.contains('hidden')) {
          dropdownList.classList.remove('hidden')
          dropdownList.classList.add('block')
        } else {
          dropdownList.classList.add('hidden');
          dropdownList.classList.remove('block');
        }
      })
    })
  }
}
