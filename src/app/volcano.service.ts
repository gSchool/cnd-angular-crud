import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {Volcano} from './volcano';
import {VOLCANOES} from './mock-volcanoes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class VolcanoService {

  constructor(private messageService: MessageService) {
  }

  getVolcanoes(): Observable<Volcano[]> {
    // TODO: send the message _after_ fetching the volcanoes
    this.messageService.add('VolcanoService: fetched volcanoes');
    return of(VOLCANOES);
  }
}
