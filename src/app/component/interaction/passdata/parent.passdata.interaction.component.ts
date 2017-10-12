import {Component, Input, OnInit} from '@angular/core';
import {Book} from "./book";

@Component({
    selector: 'parent-pass-data-interaction',
    template: `<h2>{{title}}</h2>
                <child-pass-data-interaction
                        *ngFor="let book of bookList"
                        [title]="book.title"
                        [description]="book.description">
                </child-pass-data-interaction>
              `
})
export class ParentPassDataInteractionComponent{

    private _title: string = 'Interacción a través de input binding';

    private _bookList: Book[] = [new Book("Clean Code", "Robert. C. Martin"),
        new Book("Refactoring", "Martin Flower")];

    constructor(){
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get bookList(): Book[] {
        return this._bookList;
    }

    set bookList(value: Book[]) {
        this._bookList = value;
    }
}