function getAllBooks() {
    var books = [
        { title: "Ulysses", author: "James Joyce", available: true },
        { title: "A Farewell to Arms", author: "Ernest Hemingway", available: true },
        { title: "I Know why the caged bird sings", author: "Maya Angelou", available: true }
    ];
    return books;
}
function logFirstAvailable(books) {
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var book = books_1[_i];
        if (book.available === true) {
            firstAvailable = book.title;
            break;
        }
    }
    console.log('Number of Books:', numberOfBooks);
    console.log('First Available:', firstAvailable);
}
logFirstAvailable(getAllBooks());
//# sourceMappingURL=app.js.map