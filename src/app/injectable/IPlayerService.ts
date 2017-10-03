import {Observable} from "rxjs/Observable";
import {Player} from "../component/player";
import {Subscription} from "rxjs/Subscription";

export abstract class IPlayerService {
    abstract getPlayer(idPlayer: number): Observable<Player>;

    abstract getPlayers(): Observable<Player[]>;

    abstract delete(idPlayer: number): Promise<void>;

    abstract create(player: Player): Observable<Player>;
}