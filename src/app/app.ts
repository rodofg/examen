import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Start } from './pages/start/start';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'examen';
}
