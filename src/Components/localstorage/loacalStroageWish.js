


const getStoredBookWish = () => {
    const storedBookWish = localStorage.getItem('book-listWish');
    if (storedBookWish) {
        return JSON.parse(storedBookWish);
    }
    return [];
}

const saveBooksWish = id => {
    const storedBooksWish = getStoredBookWish();
    const exists = storedBooksWish.find(bookId => bookId === id);
    if (!exists) {
        storedBooksWish.push(id);
        localStorage.setItem('book-listWish', JSON.stringify(storedBooksWish));
    }
}

export { getStoredBookWish, saveBooksWish };