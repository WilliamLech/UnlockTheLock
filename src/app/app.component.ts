import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CadenaModule} from './component/cadena/cadena.module';
import {CadenaComponent} from './component/cadena/cadena.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CadenaModule, CadenaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cadena';
}
