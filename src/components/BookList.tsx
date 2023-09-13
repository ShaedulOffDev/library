import { BookCard, Loader } from ".";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  clearBooks,
  getBooksFailure,
  getBooksStart,
  getBooksSuccess,
  setTotalItems,
} from "../slice/BooksSlice";
import BooksService from "../service/BooksService";
import { BookI, StateI } from "../interface/interface";

const BookList: React.FC = () => {
  const dispatch = useDispatch();
  const { books, isLoading, totalItems }: StateI | any = useSelector(
    (state: StateI) => state.books
  );
  const [data, setData] = useState([]);
  const [startPoint, setStartPoint] = useState<number>(0);
  const { category, sortingBy, searchingBy }:string|any = useSelector(
    (state: StateI) => state.books
  );
  const GetBooks = async (
    startIndex: number,
    search: string,
    category: string,
    sortBy: string
  ) => {
    dispatch(getBooksStart());
    try {
      const response = await BooksService.getBooks(
        startIndex,
        search,
        category,
        sortBy
      );
      dispatch(setTotalItems(response.totalItems));
      dispatch(getBooksSuccess(response.items));
    } catch (error: any) {
      dispatch(getBooksFailure(error));
      throw new Error(error);
    }
  };
  const getPoint = (startPoint: number) => {
    if (startPoint > totalItems) {
      return totalItems - (startPoint - totalItems);
    } else {
      return startPoint;
    }
  };
  useEffect(() => {
    setData(books);
  }, [books]);

  useEffect(() => {
    const point = getPoint(startPoint);
    GetBooks(point, searchingBy, category, sortingBy);
  }, [startPoint]);

  useEffect(() => {
    setStartPoint(0);
    dispatch(clearBooks());
    GetBooks(0, searchingBy, category, sortingBy);
  }, [searchingBy, category, sortingBy]);

  return (
    <div className="cont pt-10 books">
      <div className="mb-[30px]">
        <h2 className="text-[2rem] font-bold text-center">Books</h2>
        <span className="w-[35px] bg-orange-500 h-[5px] block m-auto rounded my-1"></span>
        <p className="text-center text-lg font-semibold mt-3">
          Found {totalItems && totalItems} results
        </p>
      </div>
      {isLoading && <Loader />}
      <div className="min-h-[70vh] grid grid-cols-1 min-[527px]:grid-cols-2 min-[991px]:grid-cols-3 min-[1200px]:grid-cols-4 min-[1500px]:grid-cols-5 gap-y-[20px] gap-x-[30px]">
        {data != null ? (
          data?.map((book: BookI) => (
            <BookCard key={book.id} id={book.id} volumeInfo={book.volumeInfo} />
          ))
        ) : (
          <div>
            {isLoading == false && (
              <h1 className="text-2xl font-bold absolute start-[50%] translate-x-[-50%] mt-[50px] text-gray-300">
                Nothing Found
              </h1>
            )}
          </div>
        )}
      </div>
      <div className="text-center py-10">
        <button
          onClick={() => setStartPoint(startPoint + 30)}
          disabled={isLoading}
          className={`${
            isLoading
              ? "text-gray-500 border-gray-500"
              : "text-orange-500 border-orange-500"
          } px-3 py-2 border-2 rounded ${
            startPoint + 30 > totalItems && "hidden"
          }`}
        >
          {isLoading ? "Loading..." : "See more"}
        </button>
      </div>
    </div>
  );
};

export default BookList;
