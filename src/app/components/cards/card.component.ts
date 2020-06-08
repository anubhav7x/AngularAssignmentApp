import { Component } from '@angular/core';
import { CardContent } from '../../model/card-content';

@Component({
    selector: 'app-cards',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent {

    cardHeader: any[] = ['Custom Visuals', 'Power BI Expertise', 'Consulting'];

    constructor() {
    }
}
