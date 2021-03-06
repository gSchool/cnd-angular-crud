import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const volcanoes = [
      {id: 11, name: 'Stromboli'},
      {id: 12, name: 'Nyiragongo'},
      {id: 13, name: 'Krakatau'},
      {id: 14, name: 'Villarica'},
      {id: 15, name: 'Karymsky'},
      {id: 16, name: 'Popocatepetl'},
      {id: 17, name: 'Ambrym'},
      {id: 18, name: 'Erebus'},
      {id: 19, name: 'Bogoslof'}
    ];
    return {volcanoes};
  }
}
