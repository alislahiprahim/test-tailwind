import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
