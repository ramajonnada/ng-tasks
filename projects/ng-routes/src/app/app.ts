import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSignals } from './ng-signals/ng-signals';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet,NgSignals],
	templateUrl: './app.html',
	styleUrl: './app.scss'
})
export class App {
	protected readonly title = signal('ng-routes');
}
