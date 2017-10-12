export class Book{

    private _title: String;

    private _description: String;

    constructor(title: String, description: String) {
        this._title = title;
        this._description = description;
    }

    get title(): String {
        return this._title;
    }

    set title(value: String) {
        this._title = value;
    }

    get description(): String {
        return this._description;
    }

    set description(value: String) {
        this._description = value;
    }
}