import { Component, signal, effect } from '@angular/core';
import { ZyraButton } from 'zyra-ng-ui';

@Component({
	selector: 'app-ng-signals',
	imports: [ZyraButton],
	templateUrl: './ng-signals.html',
	styleUrl: './ng-signals.scss',
})
export class NgSignals {

	name = signal('');
	number = signal(0);
	disable = signal(false);

	constructor() {
		effect((): void => {
			console.log('Count changed:', this.number(), this.name(), this.disable());
		});
	}

	increment() {
		this.number.update((value) => value + 1);

		// this.name.set('umar')
	}
	
	decrement() {
		// this.name.update((value) => value);
		// this.disable.set(true);
		this.name.update((e)=>e + 'rama');
	}



}
