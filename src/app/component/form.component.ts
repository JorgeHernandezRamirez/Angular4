import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Player} from "./player";
import {Observable} from "rxjs/Observable";
import {IPlayerService} from "../injectable/IPlayerService";
import "rxjs/add/operator/catch";
import {errorHandler} from "@angular/platform-browser/src/browser";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
  selector: 'my-test-form',
  templateUrl: './template/form.component.template.html',
  styleUrls: [ './style/form.component.css' ]
})
export class FormComponent implements OnInit {

  errorMessage: string;

  userForm: FormGroup;

  playerVar: Player;

  playersVar: Observable<Player[]>;

  constructor(private playerService: IPlayerService){}

  ngOnInit(): void {
    this.userForm = new FormGroup({
          'name': new FormControl(null, Validators.required),
          'age': new FormControl('20', [Validators.required, Validators.maxLength(2)])
        },
    );
    this.playerVar = undefined;
    this.findAll();
  }

  onFormSubmit(): void{
    console.log('Name:' + this.userForm.get('name').value + ' Age: ' + this.userForm.get('age').value);
  }

  find(idPlayer: number): void{
    this.playerService.getPlayer(idPlayer).subscribe(player => {
      this.playerVar = player;
    });
  }

  findAll(): void{
    this.playersVar = this.playerService.getPlayers();
  }

  delete(idPlayer: number): void{
    this.playerService.delete(idPlayer).then(value => {
      this.findAll();
      this.errorMessage = "Se ha borrado el usuario " + idPlayer + " correctamente";
    });
  }

  create(idPlayer: number, name: string): void{
    this.playerService.getPlayer(idPlayer).subscribe(player => {
      this.errorMessage = "Ya existe un usuario con id " + idPlayer;
    },() => this.doCreate(idPlayer, name));
  }

  private doCreate(idPlayer: number, name: string) {
    this.playerService.create(new Player(idPlayer, name)).subscribe(idPlayer => {
      this.findAll();
      this.errorMessage = "Se ha creado el usuario " + idPlayer.name + " correctamente";
    }, () => {this.errorMessage = "Ha ocurrido un error"});
  }

  get player(): Player{
    return this.playerVar;
  }

  get players(): Observable<Player[]>{
    return this.playersVar;
  }
}
