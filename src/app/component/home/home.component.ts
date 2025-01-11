import { Component, ViewEncapsulation } from '@angular/core';
import { AboutComponent } from "../about/about.component";
@Component({
  selector: 'app-home',
  imports: [AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: '../../app.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
}
