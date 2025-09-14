import { Component } from '@angular/core';
import { StartscreenComponent } from '../startscreen/startscreen.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ReferenceComponent } from '../reference/reference.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StartscreenComponent, 
            AboutMeComponent, 
            MySkillsComponent, 
            PortfolioComponent,
            ReferenceComponent
          ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
