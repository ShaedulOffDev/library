import { createSlice } from "@reduxjs/toolkit";
import { BookI, StateI } from "../interface/interface";

const initialState: StateI = {
  isLoading: false,
  books: null,
  bookDetail: null,
  error: null,
  category: "all",
  sortingBy: "relevance",
  searchingBy: "",
  totalItems: 0,
};

export const BooksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    setTotalItems: (state, actoins) => {
      state.totalItems = actoins.payload;
    },
    getBooksStart: (state) => {
      state.isLoading = true;
    },
    getBooksSuccess: (state, actions) => {
      state.isLoading = false;
      if (actions.payload !== undefined) {
        state.books = state.books
        ? [...state.books, ...actions.payload]
        : actions.payload;
        const newArr: BookI[] = [];
        state.books?.map((e) => {
          if (!newArr?.find((d : any) => d.id == e.id)) {
            newArr.push(e);
          }
        });
        state.books = newArr
      } else {
        state.books = actions.payload;
      }
    },
    clearBooks: (state) => {
      state.books = null;
    },
    getBooksFailure: (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    },
    setSearchingBy: (state, actions) => {
      state.searchingBy = actions.payload;
    },
    setSortingBy: (state, actions) => {
      state.sortingBy = actions.payload;
    },
    setCategory: (state, actions) => {
      state.category = actions.payload;
    },
    getBookDetailsStart: state => {
      state.isLoading = true
    },
    getBookDetailsSuccess: (state, actions) => {
      state.isLoading = false
      state.bookDetail = actions.payload
    },
    getBookDetailsFailure: (state, actions) => {
      state.isLoading = false
      state.error = actions.payload
    },
  },
});

export const {
  setTotalItems,
  getBooksStart,
  getBookDetailsStart,
  getBookDetailsFailure,
  getBookDetailsSuccess,
  getBooksSuccess,
  getBooksFailure,
  setSearchingBy,
  setCategory,
  clearBooks,
  setSortingBy,
} = BooksSlice.actions;
export default BooksSlice.reducer;
