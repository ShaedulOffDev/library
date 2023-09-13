import { configureStore } from "@reduxjs/toolkit";
import BooksSlice from "../slice/BooksSlice";

export default configureStore({
  reducer: { books: BooksSlice },
  devTools: process.env.NODE_ENV !== "production",
});
