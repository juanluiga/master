interface Book {
    title: string;
    isRead: boolean;
  }
  
  function isBookRead(books: Book[], titleToSearch: string): boolean {
    const foundBook = books.find((book) => book.title === titleToSearch);
    return !!foundBook && foundBook.isRead;
}