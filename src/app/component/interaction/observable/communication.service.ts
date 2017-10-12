import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CommunicationService{

    private subjectToComponent1: Subject<string>;

    private subjectToComponent2: Subject<string>;

    constructor(){
        this.subjectToComponent1 = new Subject<string>();
        this.subjectToComponent2 = new Subject<string>();
    }

    public getObservableToComponent1(): Observable<string>{
        return this.subjectToComponent1.asObservable();
    }

    public getObservableToComponent2(): Observable<string>{
        return this.subjectToComponent2.asObservable();
    }

    public sendMessageToComponent1(message: string): void{
        this.subjectToComponent1.next(message);
    }

    public sendMessageToComponent2(message: string): void{
        this.subjectToComponent2.next(message);
    }
}