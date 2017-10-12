import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {IPlayerService} from "./IPlayerService";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";
import {Player} from "./player";

@Injectable()
export class PlayerService implements IPlayerService{

    private static HEADERS = new Headers({'Content-Type': 'application/json'});

    private static PLAYER_URL = 'api/players';

    constructor(private http: Http){
    }

    getPlayer(idPlayer: number): Observable<Player> {
        let url = `${PlayerService.PLAYER_URL}/${idPlayer}`;
        return this.http.get(url).map(response => {
            return response.json().data as Player;
        }).catch(this.handleError);
    }

    getPlayers(): Observable<Player[]> {
        let url = `${PlayerService.PLAYER_URL}`;
        return this.http.get(url).map(response => {
            return response.json().data as Player[];
        }).catch(this.handleError);
    }

    delete(idPlayer: number): Promise<void> {
        let url = `${PlayerService.PLAYER_URL}/${idPlayer}`;
        return this.http.delete(url, {headers: PlayerService.HEADERS})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(player: Player): Observable<Player> {
        return this.http
            .post(PlayerService.PLAYER_URL, JSON.stringify({id: player.id, name: player.name}), {headers: PlayerService.HEADERS})
            .map(res => res.json().data as Player)
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.statusText)
    }
}