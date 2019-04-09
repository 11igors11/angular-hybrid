import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-page2',
    templateUrl: './page2.component.html',
    styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

    public routeParameter: string;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.routeParameter = this.route.snapshot.queryParamMap.get('init2');
    }

}
