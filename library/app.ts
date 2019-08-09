function getAllBooks() {
    let books = [
        { title: "Ulysses", author: "James Joyce", available: true},
        { title: "A Farewell to Arms", author: "Ernest Hemingway", available: true},
        { title: "I Know why the caged bird sings", author: "Maya Angelou", available: true}
    ];

    return books;
}

function logFirstAvailable(books) {

    let numberOfBooks = books.length;
    
    let firstAvailable = '';
        
    for(let book of books) {
        if (book.available === true) {
            firstAvailable = book.title;
            break;
        }
    }

    console.log('Number of Books:', numberOfBooks);
    console.log('First Available:', firstAvailable);
}

logFirstAvailable(getAllBooks());