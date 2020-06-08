import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    logoUrl: any;
    userIconUrl: any;
    notificationsUrl: any;
    headerTogglerUrl: any;

    constructor() {
      this.headerTogglerUrl = 'assets/Group\ 70.svg'
      this.userIconUrl = 'assets/Group\ 56.svg';
      this.notificationsUrl = 'assets/Group\ 58.svg';
      this.logoUrl = 'assets/MAQSoftware_Logo_FullColor.png';
    }

}

