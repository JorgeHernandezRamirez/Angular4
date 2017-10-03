import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/form" routerLinkActive="active">Formulario</a>
      <a routerLink="/counter" routerLinkActive="active">DataBiding</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title: String = 'Mi Aplicación de Test de Angular4';
}
