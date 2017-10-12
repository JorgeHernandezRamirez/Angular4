"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = (function () {
    function Book(title, description) {
        this._title = title;
        this._description = description;
    }
    Object.defineProperty(Book.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    return Book;
}());
exports.Book = Book;
//# sourceMappingURL=book.js.map