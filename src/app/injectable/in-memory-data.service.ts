import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const players = [
            { id: '0',  name: 'Messi'},
            { id: '1',  name: 'Cristiano'}
        ];
        return {players};
    }
}
