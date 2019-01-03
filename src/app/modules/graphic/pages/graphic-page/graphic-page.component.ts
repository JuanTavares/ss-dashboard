import { Component, OnInit } from '@angular/core';

import * as CanvasJS from 'src/canvasjs.min.js';

@Component({
  selector: 'app-graphic-page',
  templateUrl: './graphic-page.component.html',
  styleUrls: ['./graphic-page.component.css']
})
export class GraphicPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      title: {
        text: 'Novos usuários por mês'
      },
      data: [{
        type: 'column',
        dataPoints: [
          { y: 719, label: 'Abril' },
          { y: 558, label: 'Maio' },
          { y: 507, label: 'Junho' },
          { y: 656, label: 'Julho' },
          { y: 955, label: 'Agosto' },
          { y: 684, label: 'Setembro' },
          { y: 283, label: 'Outubro' },
          { y: 342, label: 'Novembro' },
          { y: 414, label: 'Dezembro' }
        ]
      }]
    });

    chart.render();
  }

}
