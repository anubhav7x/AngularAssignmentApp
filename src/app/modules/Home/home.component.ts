import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/cards/card.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    cards: any[] = ['Custom Visuals', 'Power BI Expertise', 'Consulting'];

    constructor() {
    }

    ngOnInit() {
    }
}
