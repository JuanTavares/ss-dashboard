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

    const chart2 = new CanvasJS.Chart('chartContainer2', {
      theme: 'light2',
      animationEnabled: true,
      title: {
        text: 'Custos mensais'
      },
      data: [{
        type: 'pie',
        showInLegend: true,
        toolTipContent: '<b>{name}</b>: ${y} (#percent%)',
        indexLabel: '{name} - #percent%',
        dataPoints: [
          { y: 450, name: 'Marketing' },
          { y: 800, name: 'Tecnologia' },
          { y: 150, name: 'Infraestrutura' },
          { y: 150, name: 'Material' },
          { y: 250, name: 'Outros' }
        ]
      }]
    });
    chart2.render();

    const chart3 = new CanvasJS.Chart('chartContainer3', {
      animationEnabled: true,
      theme: 'light2',
      title: {
        text: 'Usuários engajados / H'
      },
      axisY: {
        includeZero: false
      },
      data: [{
        type: 'line',
        dataPoints: [
          { y: 450 },
          { y: 414 },
          { y: 520 },
          { y: 460 },
          { y: 450 },
          { y: 500 },
          { y: 480 },
          { y: 480 },
          { y: 410 },
          { y: 500 },
          { y: 480 },
          { y: 510 }
        ]
      }]
    });
    chart3.render();
  }

}
