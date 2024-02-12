import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FilterBarComponent } from './filter-bar/filter-bar.component'; 
import { DevjobsCardComponent } from './devjobs-card/devjobs-card.component'; 
import { HeaderContentComponent } from './header-content/header-content.component';
import { ThemeService } from './theme.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DevjobsCardComponent,
    FilterBarComponent, HeaderContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isDarkMode: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.isDarkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
      this.updateTheme();
    });
  }

  updateTheme() {
    const body = document.body;
    body.style.backgroundColor = this.isDarkMode ? '#121721' : 'white';
    body.style.color = this.isDarkMode ? 'white' : 'black';

    const filterBar = document.querySelector('.filter-bar') as HTMLElement;
    if (filterBar) {
      filterBar.style.backgroundColor = this.isDarkMode ? '#121721' : 'white';
      filterBar.style.color = this.isDarkMode ? 'white' : 'black';
    }
  }
}
