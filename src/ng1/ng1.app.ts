import '@uirouter/angularjs';
import 'angular-material';
import {downgradeComponent} from '@angular/upgrade/static';
import {Ng2InputComponent} from 'src/app/ng2-input/ng2-input.component';

declare var angular: angular.IAngularStatic;

export const Ng1AppModule = angular
    .module('Ng1AppModule', ['ui.router', 'ngMaterial']);

Ng1AppModule.component('ajsMain', {
    template: `
      <div>
        <h2>Angular 1.6 page!</h2>
        <md-content md-theme="docs-dark" layout-gt-sm="row" layout-padding>
          <div>
            <md-input-container>
              <input type="text" ng-model="$ctrl.init3">
            </md-input-container>
          </div>
        </md-content>
        <a href ng-click="$ctrl.goToAngular6Page()">Go to Angular6 page!</a>
      </div>
    `,
    controller: ['$scope', '$stateParams', '$location', function ($scope, $stateParams, $location) {
        this.init3 = $stateParams.init3;

        this.goToAngular6Page = function () {
            window.location.href = `#/ng2-input/${this.init3}`;
        };
    }],
    controllerAs: '$ctrl',
})
    .directive('app-ng2-input', downgradeComponent({component: Ng2InputComponent}));

Ng1AppModule.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
    function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise('/not-found');

        $stateProvider
            .state('main', {
                url: '/ng1-input/:init3',
                component: 'ajsMain',
            });
        $stateProvider
            .state('not-found', {
                url: '/not-found',
                template: ''
            });
        $stateProvider
            .state('ng2-input', {
                url: '/ng2-input/:init2',
                template: '<app-ng2-input></app-ng2-input>'
            });

    }]);
