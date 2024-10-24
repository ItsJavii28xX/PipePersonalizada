import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CleanPipe } from './clean-pipe.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CleanPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CustomPipe';
}
