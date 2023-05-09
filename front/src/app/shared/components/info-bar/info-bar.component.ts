import { Component } from '@angular/core';
import { InfoBar } from 'src/app/models/info-bars.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss']
})
export class InfoBarComponent {

  show = true;

  inforBar:InfoBar = {
    btnsPosition: 'right',
    infoText: "infoBar.infoText.label",
    items: [
      {
        iconOnly: false,
        label: "infoBar.infoText.item1.label"
      },
      {
        iconOnly: false,
        label: "infoBar.infoText.item2.label"
      },
      {
        iconOnly: false,
        label: "infoBar.infoText.item3.label"
      }
    ]
  }


  constructor(
    private translateService: TranslateService){  }

}
