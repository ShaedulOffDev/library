export interface BookI {
  volumeInfo: volumeInfoI;
  id: string;
}
export interface volumeInfoI{
  title: string;
  subtitle: string | null;
  authors: string[] | null;
  description: string | null;
  publishedDate: string | null;
  categories: string[] | null;
  previewLink: string | null;
  infoLink: string | null;
  imageLinks: {thumbnail: string; smallThumbnail: string} | null;
}
export interface StateI {
  isLoading: boolean;
  bookDetail: BookI[] | null;
  books: BookI[] | null;
  error: string | null;
  category: string;
  sortingBy: string;
  searchingBy: string;
  totalItems: number;
}