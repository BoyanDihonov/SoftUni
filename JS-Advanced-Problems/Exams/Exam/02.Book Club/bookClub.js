class BookClub {
    constructor(library) {
      this.library = library;
      this.books = [];
      this.members = [];
    }
  
    addBook(title, author) {
      const existingBook = this.books.find(book => book.title === title && book.author === author);
      if (existingBook) {
        return `The book "${title}" by ${author} is already in ${this.library} library.`;
      } else {
        this.books.push({ title, author });
        return `The book "${title}" by ${author} has been added to ${this.library} library.`;
      }
    }
  
    addMember(memberName) {
      if (this.members.includes(memberName)) {
        return `Member ${memberName} is already a part of the book club.`;
      } else {
        this.members.push(memberName);
        return `Member ${memberName} has been joined to the book club.`;
      }
    }
  
    assignBookToMember(memberName, bookTitle) {
      const memberIndex = this.members.indexOf(memberName);
      if (memberIndex === -1) {
        throw new Error(`Member ${memberName} not found.`);
      }
  
      const bookIndex = this.books.findIndex(book => book.title === bookTitle);
      if (bookIndex === -1) {
        throw new Error(`Book "${bookTitle}" not found.`);
      }
  
      const assignedBook = this.books[bookIndex];
      this.books.splice(bookIndex, 1);
      return `Member ${memberName} has been assigned the book "${assignedBook.title}" by ${assignedBook.author}.`;
    }
  
    generateReadingReport() {
      if (this.members.length === 0) {
        return "No members in the book club.";
      }
  
      if (this.books.length === 0) {
        return `No available books in the ${this.library} library.`;
      }
  
      let report = `Available Books in ${this.library} library:\n`;
      this.books.forEach(book => {
        report += `"${book.title}" by ${book.author}\n`;
      });
      return report.trim();
    }
  }


  
