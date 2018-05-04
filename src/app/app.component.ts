import { Component } from '@angular/core';
import { DatasetOptions, Timespan } from '@helgoland/core';
import { D3PlotOptions } from '@helgoland/d3';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public datasetIdsMultiple = ['http://www.fluggs.de/sos2/api/v1/__63', 'http://www.fluggs.de/sos2/api/v1/__72'];
  public colors = ['#123456', '#FF0000'];

  public timespan = new Timespan(new Date().getTime() - 100000000, new Date().getTime());
  public diagramOptionsD3: D3PlotOptions = {
    togglePanZoom: true,
    showReferenceValues: false,
    generalizeAllways: true
  };

  public selectedIds: string[] = [];

  public datasetOptionsMultiple: Map<string, DatasetOptions> = new Map();
  public panZoom: any = 'zoom';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    this.datasetIdsMultiple.forEach((entry, i) => {
      this.datasetOptionsMultiple.set(entry, new DatasetOptions(entry, this.colors[i]));
    });
  }

  public timespanChanged(timespan: Timespan) {
    this.timespan = timespan;
  }
}
