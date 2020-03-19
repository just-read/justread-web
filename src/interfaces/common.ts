export interface Book {
  id: number;
  title: string;
  isbn: string;
  description: string;
  year: number;
  authors: string;
}

export interface Bookshelf {
  id: number;
  name: string;
}
