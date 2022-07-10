class Library {
  constructor() {
    this.books = [];
    this.borrowHistory = [];
  }

  findBook(book) {
    return this.books.findIndex(
      (b) => b.title.toLowerCase() === book.title.toLowerCase()
    );
  }

  findBookInBorrowHistory(book) {
    return this.borrowHistory.findIndex(
      (b) => b.title.toLowerCase() === book.title.toLowerCase()
    );
  }

  addBook(book) {
    if (this.findBook(book) === -1) {
      this.books.push(book);
      return true;
    } else {
      console.log(`${book.title} is already in the library`);
      return false;
    }
  }

  removeBook(book) {
    if (this.findBook(book) === -1) {
      console.log(`${book.title} is not in the library`);
      return false;
    } else {
      this.books.splice(findBook, 1);
      return true;
    }
  }

  borrowBook(book, borrowerName) {
    if (this.findBook(book) === -1) {
      console.log(`${book.title} is not in the library.`);
      return false;
    } else if (this.books[this.findBook].borrowed) {
      console.log(`${book.title} is already borrowed.`);
      return false;
    } else {
      this.books[bookIndex].borrowed = true;
      this.books[bookIndex].currentBorrower = borrowerName;
      this.borrowHistory.push({
        book: this.books[findBook],
        borrower: borrowerName,
        dateBorrowed: new Date(),
        dateReturned: null,
      });
      return true;
    }
  }

  returnBook(book) {
    if (this.findBook(book) === -1) {
      console.log(`${book.title} is not in the library.`);
      return false;
    } else if (this.findBookInBorrowHistory(book) === -1) {
      console.log(`${book.title} is not in the borrowing history.`);
      return false;
    } else {
      this.books[this.findBook(book)].borrowed = false;
      this.books[this.findBook(book)].currentBorrower = "";
      this.borrowHistory[this.findBookInBorrowHistory(book)].dateReturned =
        new Date();
      return true;
    }
  }

  getBorrowHistory() {
    let borrowHistory = "";
    this.borrowHistory.forEach((b) => {
      borrowHistory += `${b.book.title},${b.borrower},${
        b.dateBorrowed.toLocalDateString
      },${
        b.dateReturned ? b.dateReturned.toLocalDateString : `Not Returned`
      }\n`;
    });
    return borrowHistory;
  }

  getBookByTitle(title) {
    return this.books.find(
      (b) => b.title.toLowerCase() === title.toLowerCase()
    );
  }

  getBooksByAuthor(author) {
    return this.books.filter(
      (b) => b.author.toLowerCase() === author.toLowerCase()
    );
  }

  getBooksByYear(year) {
    return this.books.filter((b) => b.year === year);
  }

  getBooksByBorrower(borrowerName) {
    return this.books.filter(
      (b) => b.currentBorrower.toLowerCase() === borrowerName.toLowerCase()
    );
  }

  getBorrowedBooks() {
    return this.books.filter((b) => b.borrowed);
  }

  getAvailableBooks() {
    return this.books.filter((b) => !b.borrowed);
  }

  getBooksByGenre(genre) {
    return this.books.filter(
      (b) => b.genre.toLowerCase() === genre.toLowerCase()
    );
  }
}
