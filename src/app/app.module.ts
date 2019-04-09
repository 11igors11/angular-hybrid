import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { RouterModule, UrlHandlingStrategy, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HybridUrlHandlingStrategy } from 'src/services/hybrid-url-handling.strategy';
import { MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2InputComponent } from './ng2-input/ng2-input.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';

declare var angular: angular.IAngularStatic;

angular.module('ng2.downgrades', [])
    .directive(
        'appRoot',
        downgradeComponent({
            component: AppComponent
        }) as angular.IDirectiveFactory
    );

const ROUTES: Routes = [
    { path: 'ng2-input',
        children: [
            { path: ':init2', component: Ng2InputComponent }
        ]
    },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    declarations: [
        AppComponent,
        Ng2InputComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        UpgradeModule,
        FormsModule,
        MatInputModule,
        NoopAnimationsModule,
        RouterModule.forRoot(ROUTES, {useHash: true, enableTracing: true})
    ],
    providers: [
        {
            provide: UrlHandlingStrategy,
            useClass: HybridUrlHandlingStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    ngDoBootstrap() {}
}
