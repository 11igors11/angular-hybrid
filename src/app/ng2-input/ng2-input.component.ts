import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-ng2-input',
    template: `
    <h2>Angular 6 page!</h2>
    <form>
        <mat-form-field class="example-full-width">
            <input matInput [(ngModel)]="init2" name="init2">
        </mat-form-field>
        <a [routerLink]="['/ng1-input', init2]">Go to Angular1 page</a>
    </form>
    `
})
export class Ng2InputComponent {
    init2: string;

    constructor(private route: ActivatedRoute) {
        this.init2 = this.route.snapshot.params.init2;
    }
}
