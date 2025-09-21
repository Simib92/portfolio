import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- wichtig

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
