
const getStoredBook = () => {
    const storedBook = localStorage.getItem('book-list');
    if (storedBook) {
        return JSON.parse(storedBook);
    }
    return [];

}

const saveBooks = id => {
    const storedBooks = getStoredBook();
    const exists = storedBooks.find(bookId => bookId === id);
    if (!exists) {
        storedBooks.push(id);
        localStorage.setItem('book-list', JSON.stringify(storedBooks));
    }



}

export { getStoredBook, saveBooks }