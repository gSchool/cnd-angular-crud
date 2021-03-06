import {Component, OnInit} from '@angular/core';

import {Volcano} from '../volcano';
import {VolcanoService} from '../volcano.service';

@Component({
  selector: 'app-volcanoes',
  templateUrl: './volcanoes.component.html',
  styleUrls: ['./volcanoes.component.css']
})
export class VolcanoesComponent implements OnInit {
  volcanoes: Volcano[];

  constructor(private volcanoService: VolcanoService) {
  }

  ngOnInit() {
    this.getVolcanoes();
  }

  getVolcanoes(): void {
    this.volcanoService.getVolcanoes()
      .subscribe(volcanoes => this.volcanoes = volcanoes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.volcanoService.addVolcano({ name } as Volcano)
      .subscribe(volcano => {
        this.volcanoes.push(volcano);
      });
  }

  delete(volcano: Volcano): void {
    // this removes the volcano from the array, bad state management??
    this.volcanoes = this.volcanoes.filter(v => v !== volcano);
    this.volcanoService.deleteVolcano(volcano).subscribe();
  }

}
